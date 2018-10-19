(ns dnd-roller.core
  (:require [reagent.core :as r]))

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (r/atom {:text "Hello world!"}))
(defonce dice-selection (r/atom []))

(def d6 {:sides 6 :img "/img/perspective-dice-six-faces-five.png"})
(def d8 {:sides 8 :img "/img/dice-eight-faces-eight.png"})
(def d20 {:sides 20 :img "/img/dice-twenty-faces-twenty.png"})

(defn roll-dice-selection
  [& args]
  (swap! dice-selection
         (fn [dice]
           (map (fn [d] (assoc d :value
                               (inc (rand-int (:sides d)))))
                dice))))

(defn <dice>
  [attr dice]
  [:img (merge {:src (:img dice)
                :width "80px"}
               attr)])

(defn <dice-selector>
  []
  [:div
   (for [d [d6 d8 d20]]
     [<dice> {:key (str "d-selection-" (:sides d))
              :on-click #(do
                           (println "dice clicked")
                           (swap! dice-selection conj
                                  (assoc d :id (gensym))))}
      d])])

(defn <dice-tower>
  []
  (let [rolles (keep :value @dice-selection)
        min-v (reduce min rolles)
        max-v (reduce max rolles)]
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
        [:p {:style (merge {:text-align "center"
                            :font-size "3rem"
                            :font-family "fantasy"
                            :margin "5px"}
                           (cond
                             (= 1 (:value d))          {:color "red"
                                                        :text-shadow "0px 0px 6px red"}
                             (= (:sides d) (:value d)) {:color "gold"
                                                        :text-shadow "0px 0px 6 gold"}
                             (= min-v (:value d))      {:color "orange"}
                             (= max-v (:value d))      {:color "Teal"}))}
         (or (:value d) "?")]])
     [:span {:style {:display "inline-block"}}
      [:p {:style {:text-align "center"
                   :font-size "3rem"
                   :margin "5px"}}
       (str "= " (reduce + rolles))]]]))

(defn hello-world []
  [:div
   [:h1 "D&D Roller" ]
   [<dice-selector>]
   [:hr]
   [<dice-tower>]
   [:hr]
   [:img {:src "/img/dice/rolling-dices.png"
          :width "90px"
          :on-click roll-dice-selection}]
   ])

(defn start []
  (println "start")
  (r/render-component [hello-world]
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