goog.provide('dnd_roller.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('clojure.string');
var module$node_modules$recharts$lib$index=shadow.js.require("module$node_modules$recharts$lib$index", {});
dnd_roller.core.bar_chart = reagent.core.adapt_react_class(module$node_modules$recharts$lib$index.BarChart);
dnd_roller.core.bar = reagent.core.adapt_react_class(module$node_modules$recharts$lib$index.Bar);
if((typeof dnd_roller !== 'undefined') && (typeof dnd_roller.core !== 'undefined') && (typeof dnd_roller.core.rolls !== 'undefined')){
} else {
dnd_roller.core.rolls = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof dnd_roller !== 'undefined') && (typeof dnd_roller.core !== 'undefined') && (typeof dnd_roller.core.dice_selection_reset_timer !== 'undefined')){
} else {
dnd_roller.core.dice_selection_reset_timer = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
dnd_roller.core.dice_roll_sounds = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["./audio/dice roll 1.m4a","./audio/dice roll 2.m4a","./audio/dice roll 3.m4a","./audio/dice roll 4.m4a","./audio/dice roll 5.m4a","./audio/dice roll 6.m4a"], null);
dnd_roller.core.dice_sounds = (function (){var iter__4523__auto__ = (function dnd_roller$core$iter__26260(s__26261){
return (new cljs.core.LazySeq(null,(function (){
var s__26261__$1 = s__26261;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__26261__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var dice_type = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__26261__$1,dice_type,xs__6277__auto__,temp__5720__auto__){
return (function dnd_roller$core$iter__26260_$_iter__26262(s__26263){
return (new cljs.core.LazySeq(null,((function (s__26261__$1,dice_type,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__26263__$1 = s__26263;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__26263__$1);
if(temp__5720__auto____$1){
var s__26263__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__26263__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__26263__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__26265 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__26264 = (0);
while(true){
if((i__26264 < size__4522__auto__)){
var n = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__26264);
cljs.core.chunk_append(b__26265,["./audio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dice_type)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".m4a"].join(''));

var G__26325 = (i__26264 + (1));
i__26264 = G__26325;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26265),dnd_roller$core$iter__26260_$_iter__26262(cljs.core.chunk_rest(s__26263__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26265),null);
}
} else {
var n = cljs.core.first(s__26263__$2);
return cljs.core.cons(["./audio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dice_type)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".m4a"].join(''),dnd_roller$core$iter__26260_$_iter__26262(cljs.core.rest(s__26263__$2)));
}
} else {
return null;
}
break;
}
});})(s__26261__$1,dice_type,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__26261__$1,dice_type,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,dnd_roller$core$iter__26260(cljs.core.rest(s__26261__$1)));
} else {
var G__26326 = cljs.core.rest(s__26261__$1);
s__26261__$1 = G__26326;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["d4","d6","d8","d10","d12","d20","d100"], null));
})();
dnd_roller.core.round = (function dnd_roller$core$round(x){
return ((function (){var G__26266 = ((10) * x);
return Math.round(G__26266);
})() / (10));
});
if((typeof dnd_roller !== 'undefined') && (typeof dnd_roller.core !== 'undefined') && (typeof dnd_roller.core.history !== 'undefined')){
} else {
dnd_roller.core.history = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
}
dnd_roller.core.results_timeout = (30);
dnd_roller.core._LT_dice_roll_sounds_GT_ = (function dnd_roller$core$_LT_dice_roll_sounds_GT_(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4523__auto__ = (function dnd_roller$core$_LT_dice_roll_sounds_GT__$_iter__26267(s__26268){
return (new cljs.core.LazySeq(null,(function (){
var s__26268__$1 = s__26268;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__26268__$1);
if(temp__5720__auto__){
var s__26268__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26268__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__26268__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__26270 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__26269 = (0);
while(true){
if((i__26269 < size__4522__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__26269);
cljs.core.chunk_append(b__26270,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio","audio",1819127321),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),["da-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),new cljs.core.Keyword(null,"key","key",-1516042587),["dice-audio-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),s], null)], null)], null));

var G__26327 = (i__26269 + (1));
i__26269 = G__26327;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26270),dnd_roller$core$_LT_dice_roll_sounds_GT__$_iter__26267(cljs.core.chunk_rest(s__26268__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26270),null);
}
} else {
var s = cljs.core.first(s__26268__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio","audio",1819127321),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),["da-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),new cljs.core.Keyword(null,"key","key",-1516042587),["dice-audio-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),s], null)], null)], null),dnd_roller$core$_LT_dice_roll_sounds_GT__$_iter__26267(cljs.core.rest(s__26268__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(dnd_roller.core.dice_sounds);
})()], null);
});
dnd_roller.core.play_random_dice_sound = (function dnd_roller$core$play_random_dice_sound(d_type){
var rn = cljs.core.first(cljs.core.shuffle(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)));
var rand_sound = ["./audio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(d_type)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rn),".m4a"].join('');
return document.getElementById(["da-",rand_sound].join('')).play();
});
dnd_roller.core.count_down = (function dnd_roller$core$count_down(x){
var x__4219__auto__ = (0);
var y__4220__auto__ = (x - (1));
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
});
dnd_roller.core.d4 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sides","sides",482708052),(4),new cljs.core.Keyword(null,"img","img",1442687358),"./img/dice/d4.png"], null);
dnd_roller.core.d6 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sides","sides",482708052),(6),new cljs.core.Keyword(null,"img","img",1442687358),"./img/dice/perspective-dice-six.png"], null);
dnd_roller.core.d8 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sides","sides",482708052),(8),new cljs.core.Keyword(null,"img","img",1442687358),"./img/dice/dice-eight-faces-eight.png"], null);
dnd_roller.core.d10 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sides","sides",482708052),(10),new cljs.core.Keyword(null,"img","img",1442687358),"./img/dice/d10.png"], null);
dnd_roller.core.d12 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sides","sides",482708052),(12),new cljs.core.Keyword(null,"img","img",1442687358),"./img/dice/d12.png"], null);
dnd_roller.core.d20 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sides","sides",482708052),(20),new cljs.core.Keyword(null,"img","img",1442687358),"./img/dice/dice-twenty-faces-twenty.png"], null);
dnd_roller.core.d100 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sides","sides",482708052),(100),new cljs.core.Keyword(null,"img","img",1442687358),"./img/dice/d100.png"], null);
dnd_roller.core.all_dice = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [dnd_roller.core.d4,dnd_roller.core.d6,dnd_roller.core.d8,dnd_roller.core.d10,dnd_roller.core.d12,dnd_roller.core.d20,dnd_roller.core.d100], null);
dnd_roller.core.roll_dice_BANG_ = (function dnd_roller$core$roll_dice_BANG_(d){
var r = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"value","value",305978217),(cljs.core.rand_int(new cljs.core.Keyword(null,"sides","sides",482708052).cljs$core$IFn$_invoke$arity$1(d)) + (1)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(dnd_roller.core.history,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,new cljs.core.Keyword(null,"date-time","date-time",177938180),(new Date())));

return r;
});
dnd_roller.core._LT_dice_GT_ = (function dnd_roller$core$_LT_dice_GT_(attr,dice){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.dice-icon","img.dice-icon",-566251487),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"img","img",1442687358).cljs$core$IFn$_invoke$arity$1(dice)], null),attr], 0))], null);
});
dnd_roller.core._LT_dice_selector_GT_ = (function dnd_roller$core$_LT_dice_selector_GT_(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dice-selector","div.dice-selector",-1932368513),(function (){var iter__4523__auto__ = (function dnd_roller$core$_LT_dice_selector_GT__$_iter__26271(s__26272){
return (new cljs.core.LazySeq(null,(function (){
var s__26272__$1 = s__26272;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__26272__$1);
if(temp__5720__auto__){
var s__26272__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26272__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__26272__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__26274 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__26273 = (0);
while(true){
if((i__26273 < size__4522__auto__)){
var d = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__26273);
cljs.core.chunk_append(b__26274,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dnd_roller.core._LT_dice_GT_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),["d-selection-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sides","sides",482708052).cljs$core$IFn$_invoke$arity$1(d))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"animation-name","animation-name",-302195330),"dice-roll-animation",new cljs.core.Keyword(null,"animation-play-state","animation-play-state",655922102),"paused",new cljs.core.Keyword(null,"animation-iteration-count","animation-iteration-count",-1410888227),"infinite",new cljs.core.Keyword(null,"animation-duration","animation-duration",-1261077706),"0.5s"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__26273,d,c__4521__auto__,size__4522__auto__,b__26274,s__26272__$2,temp__5720__auto__){
return (function (event){
var target_26328 = (function (){var G__26275 = event;
if((G__26275 == null)){
return null;
} else {
return G__26275.target;
}
})();
var G__26276_26329 = target_26328;
var G__26276_26330__$1 = (((G__26276_26329 == null))?null:G__26276_26329.style);
if((G__26276_26330__$1 == null)){
} else {
G__26276_26330__$1.setProperty("animation-play-state","running","");
}

setTimeout(((function (i__26273,target_26328,d,c__4521__auto__,size__4522__auto__,b__26274,s__26272__$2,temp__5720__auto__){
return (function (){
var G__26277 = target_26328;
var G__26277__$1 = (((G__26277 == null))?null:G__26277.style);
if((G__26277__$1 == null)){
return null;
} else {
return G__26277__$1.setProperty("animation-play-state","paused","");
}
});})(i__26273,target_26328,d,c__4521__auto__,size__4522__auto__,b__26274,s__26272__$2,temp__5720__auto__))
,(500));

dnd_roller.core.play_random_dice_sound(["d",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sides","sides",482708052).cljs$core$IFn$_invoke$arity$1(d))].join(''));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(dnd_roller.core.rolls,cljs.core.conj,dnd_roller.core.roll_dice_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.gensym.cljs$core$IFn$_invoke$arity$0())));

return cljs.core.reset_BANG_(dnd_roller.core.dice_selection_reset_timer,dnd_roller.core.results_timeout);
});})(i__26273,d,c__4521__auto__,size__4522__auto__,b__26274,s__26272__$2,temp__5720__auto__))
], null),d], null));

var G__26331 = (i__26273 + (1));
i__26273 = G__26331;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26274),dnd_roller$core$_LT_dice_selector_GT__$_iter__26271(cljs.core.chunk_rest(s__26272__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26274),null);
}
} else {
var d = cljs.core.first(s__26272__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dnd_roller.core._LT_dice_GT_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),["d-selection-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sides","sides",482708052).cljs$core$IFn$_invoke$arity$1(d))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"animation-name","animation-name",-302195330),"dice-roll-animation",new cljs.core.Keyword(null,"animation-play-state","animation-play-state",655922102),"paused",new cljs.core.Keyword(null,"animation-iteration-count","animation-iteration-count",-1410888227),"infinite",new cljs.core.Keyword(null,"animation-duration","animation-duration",-1261077706),"0.5s"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (d,s__26272__$2,temp__5720__auto__){
return (function (event){
var target_26332 = (function (){var G__26278 = event;
if((G__26278 == null)){
return null;
} else {
return G__26278.target;
}
})();
var G__26279_26333 = target_26332;
var G__26279_26334__$1 = (((G__26279_26333 == null))?null:G__26279_26333.style);
if((G__26279_26334__$1 == null)){
} else {
G__26279_26334__$1.setProperty("animation-play-state","running","");
}

setTimeout(((function (target_26332,d,s__26272__$2,temp__5720__auto__){
return (function (){
var G__26280 = target_26332;
var G__26280__$1 = (((G__26280 == null))?null:G__26280.style);
if((G__26280__$1 == null)){
return null;
} else {
return G__26280__$1.setProperty("animation-play-state","paused","");
}
});})(target_26332,d,s__26272__$2,temp__5720__auto__))
,(500));

dnd_roller.core.play_random_dice_sound(["d",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sides","sides",482708052).cljs$core$IFn$_invoke$arity$1(d))].join(''));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(dnd_roller.core.rolls,cljs.core.conj,dnd_roller.core.roll_dice_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.gensym.cljs$core$IFn$_invoke$arity$0())));

return cljs.core.reset_BANG_(dnd_roller.core.dice_selection_reset_timer,dnd_roller.core.results_timeout);
});})(d,s__26272__$2,temp__5720__auto__))
], null),d], null),dnd_roller$core$_LT_dice_selector_GT__$_iter__26271(cljs.core.rest(s__26272__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(dnd_roller.core.all_dice);
})()], null);
});
dnd_roller.core._LT_dice_board_GT_ = (function dnd_roller$core$_LT_dice_board_GT_(){
var rolles = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(dnd_roller.core.rolls));
var min_v = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.min,rolles);
var max_v = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,rolles);
if(cljs.core.empty_QMARK_(rolles)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dice-board","div.dice-board",-338629491)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dice-board","div.dice-board",-338629491),(function (){var iter__4523__auto__ = ((function (rolles,min_v,max_v){
return (function dnd_roller$core$_LT_dice_board_GT__$_iter__26281(s__26282){
return (new cljs.core.LazySeq(null,((function (rolles,min_v,max_v){
return (function (){
var s__26282__$1 = s__26282;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__26282__$1);
if(temp__5720__auto__){
var s__26282__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26282__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__26282__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__26284 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__26283 = (0);
while(true){
if((i__26283 < size__4522__auto__)){
var d = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__26283);
cljs.core.chunk_append(b__26284,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.dice-board__roll","span.dice-board__roll",-589522274),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__26283,d,c__4521__auto__,size__4522__auto__,b__26284,s__26282__$2,temp__5720__auto__,rolles,min_v,max_v){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dnd_roller.core.rolls,((function (i__26283,d,c__4521__auto__,size__4522__auto__,b__26284,s__26282__$2,temp__5720__auto__,rolles,min_v,max_v){
return (function (ds){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (i__26283,d,c__4521__auto__,size__4522__auto__,b__26284,s__26282__$2,temp__5720__auto__,rolles,min_v,max_v){
return (function (dd){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dd));
});})(i__26283,d,c__4521__auto__,size__4522__auto__,b__26284,s__26282__$2,temp__5720__auto__,rolles,min_v,max_v))
,ds);
});})(i__26283,d,c__4521__auto__,size__4522__auto__,b__26284,s__26282__$2,temp__5720__auto__,rolles,min_v,max_v))
);
});})(i__26283,d,c__4521__auto__,size__4522__auto__,b__26284,s__26282__$2,temp__5720__auto__,rolles,min_v,max_v))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dnd_roller.core._LT_dice_GT_,cljs.core.PersistentArrayMap.EMPTY,d], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"3rem",new cljs.core.Keyword(null,"margin","margin",-995903681),"5px"], null),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(d)))?"crit-fail":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sides","sides",482708052).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(d)))?"crit-roll":null))], null),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "?";
}
})()], null)], null));

var G__26335 = (i__26283 + (1));
i__26283 = G__26335;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26284),dnd_roller$core$_LT_dice_board_GT__$_iter__26281(cljs.core.chunk_rest(s__26282__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26284),null);
}
} else {
var d = cljs.core.first(s__26282__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.dice-board__roll","span.dice-board__roll",-589522274),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (d,s__26282__$2,temp__5720__auto__,rolles,min_v,max_v){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dnd_roller.core.rolls,((function (d,s__26282__$2,temp__5720__auto__,rolles,min_v,max_v){
return (function (ds){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (d,s__26282__$2,temp__5720__auto__,rolles,min_v,max_v){
return (function (dd){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dd));
});})(d,s__26282__$2,temp__5720__auto__,rolles,min_v,max_v))
,ds);
});})(d,s__26282__$2,temp__5720__auto__,rolles,min_v,max_v))
);
});})(d,s__26282__$2,temp__5720__auto__,rolles,min_v,max_v))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dnd_roller.core._LT_dice_GT_,cljs.core.PersistentArrayMap.EMPTY,d], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"3rem",new cljs.core.Keyword(null,"margin","margin",-995903681),"5px"], null),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(d)))?"crit-fail":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sides","sides",482708052).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(d)))?"crit-roll":null))], null),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "?";
}
})()], null)], null),dnd_roller$core$_LT_dice_board_GT__$_iter__26281(cljs.core.rest(s__26282__$2)));
}
} else {
return null;
}
break;
}
});})(rolles,min_v,max_v))
,null,null));
});})(rolles,min_v,max_v))
;
return iter__4523__auto__(cljs.core.deref(dnd_roller.core.rolls));
})(),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.roll-summaries","div.roll-summaries",-1678056336),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.roll-summaries__summary","span.roll-summaries__summary",2113861914),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.roll-summaries__summary_value","span.roll-summaries__summary_value",-914185893),min_v], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.roll-summaries__summary_label","span.roll-summaries__summary_label",599050551),"min"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.roll-summaries__summary","span.roll-summaries__summary",2113861914),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.roll-summaries__summary_value","span.roll-summaries__summary_value",-914185893),max_v], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.roll-summaries__summary_label","span.roll-summaries__summary_label",599050551),"max"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.roll-summaries__summary","span.roll-summaries__summary",2113861914),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.roll-summaries__summary_value","span.roll-summaries__summary_value",-914185893),dnd_roller.core.round((cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,rolles) / cljs.core.count(rolles)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.roll-summaries__summary_label","span.roll-summaries__summary_label",599050551),"avg"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.roll-summaries__summary","span.roll-summaries__summary",2113861914),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.roll-summaries__summary_value","span.roll-summaries__summary_value",-914185893),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,rolles)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.roll-summaries__summary_label","span.roll-summaries__summary_label",599050551),"sum"], null)], null)], null)], null);
}
});
dnd_roller.core._LT_distribution_GT_ = (function dnd_roller$core$_LT_distribution_GT_(){
var dist = (function (){var iter__4523__auto__ = (function dnd_roller$core$_LT_distribution_GT__$_iter__26285(s__26286){
return (new cljs.core.LazySeq(null,(function (){
var s__26286__$1 = s__26286;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__26286__$1);
if(temp__5720__auto__){
var s__26286__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26286__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__26286__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__26288 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__26287 = (0);
while(true){
if((i__26287 < size__4522__auto__)){
var vec__26289 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__26287);
var sides = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26289,(0),null);
var results = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26289,(1),null);
cljs.core.chunk_append(b__26288,(function (){var distribution = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = ((function (i__26287,vec__26289,sides,results,c__4521__auto__,size__4522__auto__,b__26288,s__26286__$2,temp__5720__auto__){
return (function dnd_roller$core$_LT_distribution_GT__$_iter__26285_$_iter__26292(s__26293){
return (new cljs.core.LazySeq(null,((function (i__26287,vec__26289,sides,results,c__4521__auto__,size__4522__auto__,b__26288,s__26286__$2,temp__5720__auto__){
return (function (){
var s__26293__$1 = s__26293;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__26293__$1);
if(temp__5720__auto____$1){
var s__26293__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__26293__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__26293__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__26295 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__26294 = (0);
while(true){
if((i__26294 < size__4522__auto____$1)){
var vec__26296 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto____$1,i__26294);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26296,(0),null);
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26296,(1),null);
cljs.core.chunk_append(b__26295,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.count(items)], null));

var G__26336 = (i__26294 + (1));
i__26294 = G__26336;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26295),dnd_roller$core$_LT_distribution_GT__$_iter__26285_$_iter__26292(cljs.core.chunk_rest(s__26293__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26295),null);
}
} else {
var vec__26299 = cljs.core.first(s__26293__$2);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26299,(0),null);
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26299,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.count(items)], null),dnd_roller$core$_LT_distribution_GT__$_iter__26285_$_iter__26292(cljs.core.rest(s__26293__$2)));
}
} else {
return null;
}
break;
}
});})(i__26287,vec__26289,sides,results,c__4521__auto__,size__4522__auto__,b__26288,s__26286__$2,temp__5720__auto__))
,null,null));
});})(i__26287,vec__26289,sides,results,c__4521__auto__,size__4522__auto__,b__26288,s__26286__$2,temp__5720__auto__))
;
return iter__4523__auto__(cljs.core.group_by(new cljs.core.Keyword(null,"value","value",305978217),results));
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sides,distribution], null);
})());

var G__26337 = (i__26287 + (1));
i__26287 = G__26337;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26288),dnd_roller$core$_LT_distribution_GT__$_iter__26285(cljs.core.chunk_rest(s__26286__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26288),null);
}
} else {
var vec__26302 = cljs.core.first(s__26286__$2);
var sides = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26302,(0),null);
var results = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26302,(1),null);
return cljs.core.cons((function (){var distribution = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = ((function (vec__26302,sides,results,s__26286__$2,temp__5720__auto__){
return (function dnd_roller$core$_LT_distribution_GT__$_iter__26285_$_iter__26305(s__26306){
return (new cljs.core.LazySeq(null,((function (vec__26302,sides,results,s__26286__$2,temp__5720__auto__){
return (function (){
var s__26306__$1 = s__26306;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__26306__$1);
if(temp__5720__auto____$1){
var s__26306__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__26306__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__26306__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__26308 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__26307 = (0);
while(true){
if((i__26307 < size__4522__auto__)){
var vec__26309 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__26307);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26309,(0),null);
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26309,(1),null);
cljs.core.chunk_append(b__26308,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.count(items)], null));

var G__26338 = (i__26307 + (1));
i__26307 = G__26338;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26308),dnd_roller$core$_LT_distribution_GT__$_iter__26285_$_iter__26305(cljs.core.chunk_rest(s__26306__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26308),null);
}
} else {
var vec__26312 = cljs.core.first(s__26306__$2);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26312,(0),null);
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26312,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.count(items)], null),dnd_roller$core$_LT_distribution_GT__$_iter__26285_$_iter__26305(cljs.core.rest(s__26306__$2)));
}
} else {
return null;
}
break;
}
});})(vec__26302,sides,results,s__26286__$2,temp__5720__auto__))
,null,null));
});})(vec__26302,sides,results,s__26286__$2,temp__5720__auto__))
;
return iter__4523__auto__(cljs.core.group_by(new cljs.core.Keyword(null,"value","value",305978217),results));
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sides,distribution], null);
})(),dnd_roller$core$_LT_distribution_GT__$_iter__26285(cljs.core.rest(s__26286__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.group_by(new cljs.core.Keyword(null,"sides","sides",482708052),cljs.core.deref(dnd_roller.core.history)));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.roll-distributions","div.roll-distributions",1402398780),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (dist){
return (function dnd_roller$core$_LT_distribution_GT__$_iter__26315(s__26316){
return (new cljs.core.LazySeq(null,((function (dist){
return (function (){
var s__26316__$1 = s__26316;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__26316__$1);
if(temp__5720__auto__){
var s__26316__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26316__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__26316__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__26318 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__26317 = (0);
while(true){
if((i__26317 < size__4522__auto__)){
var vec__26319 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__26317);
var sides = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26319,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26319,(1),null);
cljs.core.chunk_append(b__26318,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.roll-distribution","div.roll-distribution",765148688),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["dist-d",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sides)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),["dist-d",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sides)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dnd_roller.core.bar_chart,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),((window.innerWidth / (4)) | (0)),new cljs.core.Keyword(null,"height","height",1025178622),(100),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__26317,vec__26319,sides,data,c__4521__auto__,size__4522__auto__,b__26318,s__26316__$2,temp__5720__auto__,dist){
return (function (_PERCENT_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,_PERCENT_,(0))], null);
});})(i__26317,vec__26319,sides,data,c__4521__auto__,size__4522__auto__,b__26318,s__26316__$2,temp__5720__auto__,dist))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,cljs.core.range.cljs$core$IFn$_invoke$arity$1(sides)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dnd_roller.core.bar,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dataKey","dataKey",-334896751),"data",new cljs.core.Keyword(null,"fill","fill",883462889),"#FFF"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["D",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sides)].join('')," #",cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(data))], null)], null));

var G__26339 = (i__26317 + (1));
i__26317 = G__26339;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26318),dnd_roller$core$_LT_distribution_GT__$_iter__26315(cljs.core.chunk_rest(s__26316__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26318),null);
}
} else {
var vec__26322 = cljs.core.first(s__26316__$2);
var sides = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26322,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26322,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.roll-distribution","div.roll-distribution",765148688),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["dist-d",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sides)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),["dist-d",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sides)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dnd_roller.core.bar_chart,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),((window.innerWidth / (4)) | (0)),new cljs.core.Keyword(null,"height","height",1025178622),(100),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__26322,sides,data,s__26316__$2,temp__5720__auto__,dist){
return (function (_PERCENT_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,_PERCENT_,(0))], null);
});})(vec__26322,sides,data,s__26316__$2,temp__5720__auto__,dist))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,cljs.core.range.cljs$core$IFn$_invoke$arity$1(sides)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dnd_roller.core.bar,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dataKey","dataKey",-334896751),"data",new cljs.core.Keyword(null,"fill","fill",883462889),"#FFF"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["D",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sides)].join('')," #",cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(data))], null)], null),dnd_roller$core$_LT_distribution_GT__$_iter__26315(cljs.core.rest(s__26316__$2)));
}
} else {
return null;
}
break;
}
});})(dist))
,null,null));
});})(dist))
;
return iter__4523__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,dist));
})())], null);
});
dnd_roller.core.main_view = (function dnd_roller$core$main_view(){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main","div.main",-117780813),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dnd_roller.core._LT_dice_roll_sounds_GT_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.app-title","h1.app-title",-1252602906),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null)], null),"D&D Roller"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.refresh-icon","img.refresh-icon",434928432),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/img/refresh.png",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return location.reload(true);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress.dice-timeout","progress.dice-timeout",2121006960),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max","max",61366548),dnd_roller.core.results_timeout,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(dnd_roller.core.dice_selection_reset_timer)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dnd_roller.core._LT_dice_selector_GT_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dnd_roller.core._LT_dice_board_GT_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dnd_roller.core._LT_distribution_GT_], null)], null);
});
dnd_roller.core.start = (function dnd_roller$core$start(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dnd_roller.core.main_view], null),document.getElementById("app"));
});
dnd_roller.core.init = (function dnd_roller$core$init(){
setInterval((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dnd_roller.core.dice_selection_reset_timer,dnd_roller.core.count_down);

if((cljs.core.deref(dnd_roller.core.dice_selection_reset_timer) === (0))){
return cljs.core.reset_BANG_(dnd_roller.core.rolls,cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
}),(1000));

return dnd_roller.core.start();
});
goog.exportSymbol('dnd_roller.core.init', dnd_roller.core.init);
dnd_roller.core.stop = (function dnd_roller$core$stop(){
return console.log("stop");
});

//# sourceMappingURL=dnd_roller.core.js.map
