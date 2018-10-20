(ns dnd-roller.core
  (:require [reagent.core :as r]))

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (r/atom {:text "Hello world!"}))
(defonce dice-selection (r/atom []))

(defonce dice-selection-reset-timer (r/atom 0))

(def dice-roll-sounds ["/audio/dice roll 1.m4a"
                       "/audio/dice roll 2.m4a"
                       "/audio/dice roll 3.m4a"
                       "/audio/dice roll 4.m4a"
                       "/audio/dice roll 5.m4a"
                       "/audio/dice roll 6.m4a"])

(defn <dice-roll-sounds>
  []
  [:div
   (for [s dice-roll-sounds]
     [:audio {:id  (str "da-" s)
              :key (str "dice-audio-" s)}
      [:source {:src s}]])])

(defn play-random-dice-sound
  []
  (let [rand-sound (->> dice-roll-sounds
                        shuffle
                        first)]
    (println (str "Playing: " rand-sound))
    (->> rand-sound
         (str "da-")
         (.getElementById js/document)
         .play)))


(defn count-down
  [x]
  (max 0 (dec x)))

(def d4  {:sides  4 :img "/img/dice/d4.png"})
(def d6  {:sides  6 :img "/img/dice/perspective-dice-six.png"})
(def d8  {:sides  8 :img "/img/dice/dice-eight-faces-eight.png"})
(def d10 {:sides 10 :img "/img/dice/d10.png"})
(def d12 {:sides 12 :img "/img/dice/d12.png"})
(def d20 {:sides 20 :img "/img/dice/dice-twenty-faces-twenty.png"})

(def  all-dice [d4 d6 d8 d10 d12 d20])

(defn roll-dice
  [d]
  (assoc d :value
         (inc (rand-int (:sides d)))))

(defn roll-dice-selection!
  [& args]
  (swap! dice-selection #(map roll-dice %)))

(defn <dice>
  [attr dice]
  [:img.dice-icon (merge {:src (:img dice)}
                         attr)])

(defn <dice-selector>
  []
  [:div
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
                          (play-random-dice-sound)
                          (swap! dice-selection conj
                                 (-> d
                                     (assoc :id (gensym))
                                     roll-dice))
                          (reset! dice-selection-reset-timer 20))}
      d])])

(defn <dice-tower>
  []
  (let [rolles (keep :value @dice-selection)
        min-v (reduce min rolles)
        max-v (reduce max rolles)]
    (if (empty? rolles)
      [:div]
      [:div
       (for [d @dice-selection]
         [:span {:key (:id d)
                 :style {:display "inline-block"}
                 :on-click #(swap! dice-selection
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
                        (= min-v (:value d))      "worst-roll"
                        (= max-v (:value d))      "best-roll")}
           (or (:value d) "?")]])
       [:span {:style {:display "inline-block"}}
        [:p {:style {:text-align "center"
                     :font-size "3rem"
                     :margin "5px"}}
         (str "= " (reduce + rolles))]]])))

(defn main-view []
  [:div
   [:h1 {:style {:display "inline-block"}} "D&D Roller"]
   [:img.refresh-icon {:src "/img/refresh.png"
                       :on-click #(.reload js/location true)}]
   [<dice-roll-sounds>]
   [<dice-selector>]
   [:progress.dice-timeout {:max 20 :value @dice-selection-reset-timer}]
   [<dice-tower>]])

(defn start []
  (println "start")
  (r/render-component [main-view]
                      (. js/document (getElementById "app"))))

(defn ^:export init []
  ;; init is called ONCE when the page loads
  ;; this is called in the index.html and must be exported
  ;; so it is available even in :advanced release builds
  (js/setInterval #(do
                     (swap! dice-selection-reset-timer count-down)
                     (when (zero? @dice-selection-reset-timer)
                       (reset! dice-selection [])))
                  1000)
  (start))

(defn stop []
  ;; stop is called before any code is reloaded
  ;; this is controlled by :before-load in the config
  (js/console.log "stop"))
