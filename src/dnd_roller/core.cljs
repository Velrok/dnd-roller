(ns dnd-roller.core
  (:require [reagent.core :as r]))

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (r/atom {:text "Hello world!"}))
(defonce dice-selection (r/atom []))

(def d6  {:sides  6 :img "/img/dice/perspective-dice-six-faces-five.png"})
(def d8  {:sides  8 :img "/img/dice/dice-eight-faces-eight.png"})
(def d20 {:sides 20 :img "/img/dice/dice-twenty-faces-twenty.png"})

(defn roll-dice
  [d]
  (assoc d :value
         (inc (rand-int (:sides d)))))

(defn roll-dice-selection!
  [& args]
  (swap! dice-selection #(map roll-dice %)))

(defn <dice>
  [attr dice]
  [:img.dice-icon (merge {:src (:img dice)
                          :width "80px"}
                         attr)])

(defn <dice-selector>
  []
  [:div
   (for [d [d6 d8 d20]]
     [<dice> {:key (str "d-selection-" (:sides d))
              :on-click #(swap! dice-selection conj
                                (-> d
                                    (assoc :id (gensym))
                                    roll-dice))}
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
                       :font-family "fantasy"
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
   [:h1 "D&D Roller" ]
   [<dice-selector>]
   [:hr]
   [<dice-tower>]
   ;[:hr]
   ;[:img.roll-icon {:src "/img/dice/rolling-dices.png"
   ;                 :width "90px"
   ;                 :on-click roll-dice-selection!}]
   ])

(defn start []
  (println "start")
  (r/render-component [main-view]
                      (. js/document (getElementById "app"))))

(defn ^:export init []
  ;; init is called ONCE when the page loads
  ;; this is called in the index.html and must be exported
  ;; so it is available even in :advanced release builds
  (start))

(defn stop []
  ;; stop is called before any code is reloaded
  ;; this is controlled by :before-load in the config
  (js/console.log "stop"))
