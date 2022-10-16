(ns dnd-roller.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [clojure.string :as str]
            ["recharts" :refer [BarChart Bar]]))

(def bar-chart (r/adapt-react-class BarChart))
(def bar (r/adapt-react-class Bar))

(defonce rolls (r/atom []))
(defonce dice-selection-reset-timer (r/atom 0))

(def dice-roll-sounds ["./audio/dice roll 1.m4a"
                       "./audio/dice roll 2.m4a"
                       "./audio/dice roll 3.m4a"
                       "./audio/dice roll 4.m4a"
                       "./audio/dice roll 5.m4a"
                       "./audio/dice roll 6.m4a"])

(def dice-sounds
  (for [dice-type ["d4" "d6" "d8" "d10" "d12" "d20" "d100"]
        n (map inc (range 3))]
    (str "./audio/" dice-type " " n ".m4a")))

(defn- round
  [x]
  (/
   (Math/round (* 10 x))
   10))

(defonce history (r/atom ()))

(def results-timeout 30)

(defn <dice-roll-sounds>
  []
  [:div
   (for [s dice-sounds]
     [:audio {:id  (str "da-" s)
              :key (str "dice-audio-" s)}
      [:source {:src s}]])])

(defn play-random-dice-sound
  [d-type]
  (let [rn (->> [1 2 3] shuffle first)
        rand-sound (str "./audio/" d-type " " rn ".m4a")]
    (->> rand-sound
         (str "da-")
         (.getElementById js/document)
         .play)))


(defn count-down
  [x]
  (max 0 (dec x)))

(def d4   {:sides   4 :img "./img/dice/d4.png"})
(def d6   {:sides   6 :img "./img/dice/perspective-dice-six.png"})
(def d8   {:sides   8 :img "./img/dice/dice-eight-faces-eight.png"})
(def d10  {:sides  10 :img "./img/dice/d10.png"})
(def d12  {:sides  12 :img "./img/dice/d12.png"})
(def d20  {:sides  20 :img "./img/dice/dice-twenty-faces-twenty.png"})
(def d100 {:sides 100 :img "./img/dice/d100.png"})

(def all-dice [d4 d6 d8 d10 d12 d20 d100])

(defn roll-dice!
  [d]
  (let [r (assoc d :value
                 (inc (rand-int (:sides d))))]
    (swap! history conj (assoc r :date-time (js/Date.)))
    r))

(defn <dice>
  [attr dice]
  [:img.dice-icon (merge {:src (:img dice)}
                         attr)])

(defn <dice-selector>
  []
  [:div.dice-selector
   (for [d  all-dice]
     [<dice> {:key (str "d-selection-" (:sides d))
              :style {:animation-name "dice-roll-animation"
                      :animation-play-state "paused"
                      :animation-iteration-count "infinite"
                      :animation-duration "0.5s"}
              :on-click (fn [event]
                          ;;(some-> event .-target .-style .-animation-play-state println)
                          (let [target (some-> event .-target)]
                            (some-> target .-style (.setProperty "animation-play-state" "running" ""))
                            (js/setTimeout
                              #(some-> target .-style (.setProperty "animation-play-state" "paused" ""))
                              500))
                          (play-random-dice-sound (str "d" (:sides d)))
                          (swap! rolls conj
                                 (-> d
                                     (assoc :id (gensym))
                                     roll-dice!))
                          (reset! dice-selection-reset-timer results-timeout))}
      d])])

(defn <dice-board>
  []
  (let [rolles (keep :value @rolls)
        min-v  (reduce min rolles)
        max-v  (reduce max rolles)
        ]
    (if (empty? rolles)
      [:div.dice-board]
      [:div.dice-board
       (for [d @rolls]
         [:span.dice-board__roll
          {:key (:id d)
           :style {:display "inline-block"}
           :on-click #(swap! rolls
                             (fn [ds]
                               (remove
                                 (fn [dd] (= (:id d) (:id dd)))
                                 ds)))}
          [<dice> {} d]
          [:p {:style {:text-align "center"
                       :font-size "3rem"
                       :margin "5px"}
               :class (cond
                        (= 1 (:value d))          "crit-fail"
                        (= (:sides d) (:value d)) "crit-roll"
                        ;(= min-v (:value d))      "worst-roll"
                        ;(= max-v (:value d))      "best-roll"
                        )}
           (or (:value d) "?")]])
       [:div.roll-summaries
        [:span.roll-summaries__summary
         [:span.roll-summaries__summary_value min-v]
         [:span.roll-summaries__summary_label "min"]]
        [:span.roll-summaries__summary
         [:span.roll-summaries__summary_value max-v]
         [:span.roll-summaries__summary_label "max"]]
        [:span.roll-summaries__summary
         [:span.roll-summaries__summary_value (round (/ (reduce + rolles) (count rolles)))]
         [:span.roll-summaries__summary_label "avg"]]
        [:span.roll-summaries__summary
         [:span.roll-summaries__summary_value (reduce + rolles)]
         [:span.roll-summaries__summary_label "sum"]]]])))

(defn <distribution>
  []
  (let [dist (for [[sides results] (group-by :sides @history)]
               (let [distribution
                     (into {}
                           (for [[v items] (group-by :value results)]
                             [v (count items)]))]
                 [sides distribution]))]
    [:div.roll-distributions
     (doall
       (for [[sides data] (sort-by first dist)]
         [:div.roll-distribution {:key (str "dist-d" sides)
                                  :class (str "dist-d" sides)}
          [bar-chart {:width (int (/ (.-innerWidth js/window) 4))
                      :height 100
                      :data (map (fn [%]
                                   {:data (get data % 0)})
                                 (map inc (range sides)))}
           [bar {:dataKey "data" :fill "#FFF"}]]
          [:p
           (str "D" sides)
           " #" (reduce + (vals data))]]))]))

(defn main-view []
  [:div.main
   [<dice-roll-sounds>]
   [:h1.app-title {:style {:display "inline-block"}} "D&D Roller"]
   [:img.refresh-icon {:src "./img/refresh.png"
                       :on-click #(.reload js/location true)}]
   [:progress.dice-timeout {:max results-timeout
                            :value @dice-selection-reset-timer}]
   [<dice-selector>]
   [<dice-board>]
   [<distribution>] ])

(defn start []
  (rdom/render [main-view]
               (. js/document (getElementById "app"))))

(defn ^:export init []
  ;; init is called ONCE when the page loads
  ;; this is called in the index.html and must be exported
  ;; so it is available even in :advanced release builds
  (js/setInterval #(do
                     (swap! dice-selection-reset-timer count-down)
                     (when (zero? @dice-selection-reset-timer)
                       (reset! rolls [])))
                  1000)
  (start))

(defn stop []
  ;; stop is called before any code is reloaded
  ;; this is controlled by :before-load in the config
  (js/console.log "stop"))
