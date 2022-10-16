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
dnd_roller.core.dice_roll_sounds = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/audio/dice roll 1.m4a","/audio/dice roll 2.m4a","/audio/dice roll 3.m4a","/audio/dice roll 4.m4a","/audio/dice roll 5.m4a","/audio/dice roll 6.m4a"], null);
dnd_roller.core.dice_sounds = (function (){var iter__4523__auto__ = (function dnd_roller$core$iter__38054(s__38055){
return (new cljs.core.LazySeq(null,(function (){
var s__38055__$1 = s__38055;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__38055__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var dice_type = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__38055__$1,dice_type,xs__6277__auto__,temp__5720__auto__){
return (function dnd_roller$core$iter__38054_$_iter__38056(s__38057){
return (new cljs.core.LazySeq(null,((function (s__38055__$1,dice_type,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__38057__$1 = s__38057;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__38057__$1);
if(temp__5720__auto____$1){
var s__38057__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38057__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__38057__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__38059 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__38058 = (0);
while(true){
if((i__38058 < size__4522__auto__)){
var n = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__38058);
cljs.core.chunk_append(b__38059,["/audio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dice_type)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".m4a"].join(''));

var G__38119 = (i__38058 + (1));
i__38058 = G__38119;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38059),dnd_roller$core$iter__38054_$_iter__38056(cljs.core.chunk_rest(s__38057__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38059),null);
}
} else {
var n = cljs.core.first(s__38057__$2);
return cljs.core.cons(["/audio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dice_type)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".m4a"].join(''),dnd_roller$core$iter__38054_$_iter__38056(cljs.core.rest(s__38057__$2)));
}
} else {
return null;
}
break;
}
});})(s__38055__$1,dice_type,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__38055__$1,dice_type,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,dnd_roller$core$iter__38054(cljs.core.rest(s__38055__$1)));
} else {
var G__38120 = cljs.core.rest(s__38055__$1);
s__38055__$1 = G__38120;
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
return ((function (){var G__38060 = ((10) * x);
return Math.round(G__38060);
})() / (10));
});
if((typeof dnd_roller !== 'undefined') && (typeof dnd_roller.core !== 'undefined') && (typeof dnd_roller.core.history !== 'undefined')){
} else {
dnd_roller.core.history = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
}
dnd_roller.core.results_timeout = (30);
dnd_roller.core._LT_dice_roll_sounds_GT_ = (function dnd_roller$core$_LT_dice_roll_sounds_GT_(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4523__auto__ = (function dnd_roller$core$_LT_dice_roll_sounds_GT__$_iter__38061(s__38062){
return (new cljs.core.LazySeq(null,(function (){
var s__38062__$1 = s__38062;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__38062__$1);
if(temp__5720__auto__){
var s__38062__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38062__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__38062__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__38064 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__38063 = (0);
while(true){
if((i__38063 < size__4522__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__38063);
cljs.core.chunk_append(b__38064,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio","audio",1819127321),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),["da-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),new cljs.core.Keyword(null,"key","key",-1516042587),["dice-audio-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),s], null)], null)], null));

var G__38121 = (i__38063 + (1));
i__38063 = G__38121;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38064),dnd_roller$core$_LT_dice_roll_sounds_GT__$_iter__38061(cljs.core.chunk_rest(s__38062__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38064),null);
}
} else {
var s = cljs.core.first(s__38062__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio","audio",1819127321),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),["da-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),new cljs.core.Keyword(null,"key","key",-1516042587),["dice-audio-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),s], null)], null)], null),dnd_roller$core$_LT_dice_roll_sounds_GT__$_iter__38061(cljs.core.rest(s__38062__$2)));
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
var rand_sound = ["/audio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(d_type)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rn),".m4a"].join('');
return document.getElementById(["da-",rand_sound].join('')).play();
});
dnd_roller.core.count_down = (function dnd_roller$core$count_down(x){
var x__4219__auto__ = (0);
var y__4220__auto__ = (x - (1));
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
});
dnd_roller.core.d4 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sides","sides",482708052),(4),new cljs.core.Keyword(null,"img","img",1442687358),"/img/dice/d4.png"], null);
dnd_roller.core.d6 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sides","sides",482708052),(6),new cljs.core.Keyword(null,"img","img",1442687358),"/img/dice/perspective-dice-six.png"], null);
dnd_roller.core.d8 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sides","sides",482708052),(8),new cljs.core.Keyword(null,"img","img",1442687358),"/img/dice/dice-eight-faces-eight.png"], null);
dnd_roller.core.d10 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sides","sides",482708052),(10),new cljs.core.Keyword(null,"img","img",1442687358),"/img/dice/d10.png"], null);
dnd_roller.core.d12 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sides","sides",482708052),(12),new cljs.core.Keyword(null,"img","img",1442687358),"/img/dice/d12.png"], null);
dnd_roller.core.d20 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sides","sides",482708052),(20),new cljs.core.Keyword(null,"img","img",1442687358),"/img/dice/dice-twenty-faces-twenty.png"], null);
dnd_roller.core.d100 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sides","sides",482708052),(100),new cljs.core.Keyword(null,"img","img",1442687358),"/img/dice/d100.png"], null);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dice-selector","div.dice-selector",-1932368513),(function (){var iter__4523__auto__ = (function dnd_roller$core$_LT_dice_selector_GT__$_iter__38065(s__38066){
return (new cljs.core.LazySeq(null,(function (){
var s__38066__$1 = s__38066;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__38066__$1);
if(temp__5720__auto__){
var s__38066__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38066__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__38066__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__38068 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__38067 = (0);
while(true){
if((i__38067 < size__4522__auto__)){
var d = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__38067);
cljs.core.chunk_append(b__38068,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dnd_roller.core._LT_dice_GT_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),["d-selection-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sides","sides",482708052).cljs$core$IFn$_invoke$arity$1(d))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"animation-name","animation-name",-302195330),"dice-roll-animation",new cljs.core.Keyword(null,"animation-play-state","animation-play-state",655922102),"paused",new cljs.core.Keyword(null,"animation-iteration-count","animation-iteration-count",-1410888227),"infinite",new cljs.core.Keyword(null,"animation-duration","animation-duration",-1261077706),"0.5s"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__38067,d,c__4521__auto__,size__4522__auto__,b__38068,s__38066__$2,temp__5720__auto__){
return (function (event){
var target_38122 = (function (){var G__38069 = event;
if((G__38069 == null)){
return null;
} else {
return G__38069.target;
}
})();
var G__38070_38123 = target_38122;
var G__38070_38124__$1 = (((G__38070_38123 == null))?null:G__38070_38123.style);
if((G__38070_38124__$1 == null)){
} else {
G__38070_38124__$1.setProperty("animation-play-state","running","");
}

setTimeout(((function (i__38067,target_38122,d,c__4521__auto__,size__4522__auto__,b__38068,s__38066__$2,temp__5720__auto__){
return (function (){
var G__38071 = target_38122;
var G__38071__$1 = (((G__38071 == null))?null:G__38071.style);
if((G__38071__$1 == null)){
return null;
} else {
return G__38071__$1.setProperty("animation-play-state","paused","");
}
});})(i__38067,target_38122,d,c__4521__auto__,size__4522__auto__,b__38068,s__38066__$2,temp__5720__auto__))
,(500));

dnd_roller.core.play_random_dice_sound(["d",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sides","sides",482708052).cljs$core$IFn$_invoke$arity$1(d))].join(''));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(dnd_roller.core.rolls,cljs.core.conj,dnd_roller.core.roll_dice_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.gensym.cljs$core$IFn$_invoke$arity$0())));

return cljs.core.reset_BANG_(dnd_roller.core.dice_selection_reset_timer,dnd_roller.core.results_timeout);
});})(i__38067,d,c__4521__auto__,size__4522__auto__,b__38068,s__38066__$2,temp__5720__auto__))
], null),d], null));

var G__38125 = (i__38067 + (1));
i__38067 = G__38125;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38068),dnd_roller$core$_LT_dice_selector_GT__$_iter__38065(cljs.core.chunk_rest(s__38066__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38068),null);
}
} else {
var d = cljs.core.first(s__38066__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dnd_roller.core._LT_dice_GT_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),["d-selection-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sides","sides",482708052).cljs$core$IFn$_invoke$arity$1(d))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"animation-name","animation-name",-302195330),"dice-roll-animation",new cljs.core.Keyword(null,"animation-play-state","animation-play-state",655922102),"paused",new cljs.core.Keyword(null,"animation-iteration-count","animation-iteration-count",-1410888227),"infinite",new cljs.core.Keyword(null,"animation-duration","animation-duration",-1261077706),"0.5s"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (d,s__38066__$2,temp__5720__auto__){
return (function (event){
var target_38126 = (function (){var G__38072 = event;
if((G__38072 == null)){
return null;
} else {
return G__38072.target;
}
})();
var G__38073_38127 = target_38126;
var G__38073_38128__$1 = (((G__38073_38127 == null))?null:G__38073_38127.style);
if((G__38073_38128__$1 == null)){
} else {
G__38073_38128__$1.setProperty("animation-play-state","running","");
}

setTimeout(((function (target_38126,d,s__38066__$2,temp__5720__auto__){
return (function (){
var G__38074 = target_38126;
var G__38074__$1 = (((G__38074 == null))?null:G__38074.style);
if((G__38074__$1 == null)){
return null;
} else {
return G__38074__$1.setProperty("animation-play-state","paused","");
}
});})(target_38126,d,s__38066__$2,temp__5720__auto__))
,(500));

dnd_roller.core.play_random_dice_sound(["d",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sides","sides",482708052).cljs$core$IFn$_invoke$arity$1(d))].join(''));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(dnd_roller.core.rolls,cljs.core.conj,dnd_roller.core.roll_dice_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.gensym.cljs$core$IFn$_invoke$arity$0())));

return cljs.core.reset_BANG_(dnd_roller.core.dice_selection_reset_timer,dnd_roller.core.results_timeout);
});})(d,s__38066__$2,temp__5720__auto__))
], null),d], null),dnd_roller$core$_LT_dice_selector_GT__$_iter__38065(cljs.core.rest(s__38066__$2)));
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
return (function dnd_roller$core$_LT_dice_board_GT__$_iter__38075(s__38076){
return (new cljs.core.LazySeq(null,((function (rolles,min_v,max_v){
return (function (){
var s__38076__$1 = s__38076;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__38076__$1);
if(temp__5720__auto__){
var s__38076__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38076__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__38076__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__38078 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__38077 = (0);
while(true){
if((i__38077 < size__4522__auto__)){
var d = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__38077);
cljs.core.chunk_append(b__38078,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.dice-board__roll","span.dice-board__roll",-589522274),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__38077,d,c__4521__auto__,size__4522__auto__,b__38078,s__38076__$2,temp__5720__auto__,rolles,min_v,max_v){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dnd_roller.core.rolls,((function (i__38077,d,c__4521__auto__,size__4522__auto__,b__38078,s__38076__$2,temp__5720__auto__,rolles,min_v,max_v){
return (function (ds){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (i__38077,d,c__4521__auto__,size__4522__auto__,b__38078,s__38076__$2,temp__5720__auto__,rolles,min_v,max_v){
return (function (dd){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dd));
});})(i__38077,d,c__4521__auto__,size__4522__auto__,b__38078,s__38076__$2,temp__5720__auto__,rolles,min_v,max_v))
,ds);
});})(i__38077,d,c__4521__auto__,size__4522__auto__,b__38078,s__38076__$2,temp__5720__auto__,rolles,min_v,max_v))
);
});})(i__38077,d,c__4521__auto__,size__4522__auto__,b__38078,s__38076__$2,temp__5720__auto__,rolles,min_v,max_v))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dnd_roller.core._LT_dice_GT_,cljs.core.PersistentArrayMap.EMPTY,d], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"3rem",new cljs.core.Keyword(null,"margin","margin",-995903681),"5px"], null),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(d)))?"crit-fail":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sides","sides",482708052).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(d)))?"crit-roll":null))], null),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "?";
}
})()], null)], null));

var G__38129 = (i__38077 + (1));
i__38077 = G__38129;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38078),dnd_roller$core$_LT_dice_board_GT__$_iter__38075(cljs.core.chunk_rest(s__38076__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38078),null);
}
} else {
var d = cljs.core.first(s__38076__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.dice-board__roll","span.dice-board__roll",-589522274),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (d,s__38076__$2,temp__5720__auto__,rolles,min_v,max_v){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dnd_roller.core.rolls,((function (d,s__38076__$2,temp__5720__auto__,rolles,min_v,max_v){
return (function (ds){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (d,s__38076__$2,temp__5720__auto__,rolles,min_v,max_v){
return (function (dd){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dd));
});})(d,s__38076__$2,temp__5720__auto__,rolles,min_v,max_v))
,ds);
});})(d,s__38076__$2,temp__5720__auto__,rolles,min_v,max_v))
);
});})(d,s__38076__$2,temp__5720__auto__,rolles,min_v,max_v))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dnd_roller.core._LT_dice_GT_,cljs.core.PersistentArrayMap.EMPTY,d], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"3rem",new cljs.core.Keyword(null,"margin","margin",-995903681),"5px"], null),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(d)))?"crit-fail":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sides","sides",482708052).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(d)))?"crit-roll":null))], null),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "?";
}
})()], null)], null),dnd_roller$core$_LT_dice_board_GT__$_iter__38075(cljs.core.rest(s__38076__$2)));
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
var dist = (function (){var iter__4523__auto__ = (function dnd_roller$core$_LT_distribution_GT__$_iter__38079(s__38080){
return (new cljs.core.LazySeq(null,(function (){
var s__38080__$1 = s__38080;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__38080__$1);
if(temp__5720__auto__){
var s__38080__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38080__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__38080__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__38082 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__38081 = (0);
while(true){
if((i__38081 < size__4522__auto__)){
var vec__38083 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__38081);
var sides = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38083,(0),null);
var results = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38083,(1),null);
cljs.core.chunk_append(b__38082,(function (){var distribution = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = ((function (i__38081,vec__38083,sides,results,c__4521__auto__,size__4522__auto__,b__38082,s__38080__$2,temp__5720__auto__){
return (function dnd_roller$core$_LT_distribution_GT__$_iter__38079_$_iter__38086(s__38087){
return (new cljs.core.LazySeq(null,((function (i__38081,vec__38083,sides,results,c__4521__auto__,size__4522__auto__,b__38082,s__38080__$2,temp__5720__auto__){
return (function (){
var s__38087__$1 = s__38087;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__38087__$1);
if(temp__5720__auto____$1){
var s__38087__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38087__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__38087__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__38089 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__38088 = (0);
while(true){
if((i__38088 < size__4522__auto____$1)){
var vec__38090 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto____$1,i__38088);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38090,(0),null);
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38090,(1),null);
cljs.core.chunk_append(b__38089,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.count(items)], null));

var G__38130 = (i__38088 + (1));
i__38088 = G__38130;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38089),dnd_roller$core$_LT_distribution_GT__$_iter__38079_$_iter__38086(cljs.core.chunk_rest(s__38087__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38089),null);
}
} else {
var vec__38093 = cljs.core.first(s__38087__$2);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38093,(0),null);
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38093,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.count(items)], null),dnd_roller$core$_LT_distribution_GT__$_iter__38079_$_iter__38086(cljs.core.rest(s__38087__$2)));
}
} else {
return null;
}
break;
}
});})(i__38081,vec__38083,sides,results,c__4521__auto__,size__4522__auto__,b__38082,s__38080__$2,temp__5720__auto__))
,null,null));
});})(i__38081,vec__38083,sides,results,c__4521__auto__,size__4522__auto__,b__38082,s__38080__$2,temp__5720__auto__))
;
return iter__4523__auto__(cljs.core.group_by(new cljs.core.Keyword(null,"value","value",305978217),results));
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sides,distribution], null);
})());

var G__38131 = (i__38081 + (1));
i__38081 = G__38131;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38082),dnd_roller$core$_LT_distribution_GT__$_iter__38079(cljs.core.chunk_rest(s__38080__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38082),null);
}
} else {
var vec__38096 = cljs.core.first(s__38080__$2);
var sides = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38096,(0),null);
var results = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38096,(1),null);
return cljs.core.cons((function (){var distribution = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = ((function (vec__38096,sides,results,s__38080__$2,temp__5720__auto__){
return (function dnd_roller$core$_LT_distribution_GT__$_iter__38079_$_iter__38099(s__38100){
return (new cljs.core.LazySeq(null,((function (vec__38096,sides,results,s__38080__$2,temp__5720__auto__){
return (function (){
var s__38100__$1 = s__38100;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__38100__$1);
if(temp__5720__auto____$1){
var s__38100__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38100__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__38100__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__38102 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__38101 = (0);
while(true){
if((i__38101 < size__4522__auto__)){
var vec__38103 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__38101);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38103,(0),null);
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38103,(1),null);
cljs.core.chunk_append(b__38102,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.count(items)], null));

var G__38132 = (i__38101 + (1));
i__38101 = G__38132;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38102),dnd_roller$core$_LT_distribution_GT__$_iter__38079_$_iter__38099(cljs.core.chunk_rest(s__38100__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38102),null);
}
} else {
var vec__38106 = cljs.core.first(s__38100__$2);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38106,(0),null);
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38106,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.count(items)], null),dnd_roller$core$_LT_distribution_GT__$_iter__38079_$_iter__38099(cljs.core.rest(s__38100__$2)));
}
} else {
return null;
}
break;
}
});})(vec__38096,sides,results,s__38080__$2,temp__5720__auto__))
,null,null));
});})(vec__38096,sides,results,s__38080__$2,temp__5720__auto__))
;
return iter__4523__auto__(cljs.core.group_by(new cljs.core.Keyword(null,"value","value",305978217),results));
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sides,distribution], null);
})(),dnd_roller$core$_LT_distribution_GT__$_iter__38079(cljs.core.rest(s__38080__$2)));
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
return (function dnd_roller$core$_LT_distribution_GT__$_iter__38109(s__38110){
return (new cljs.core.LazySeq(null,((function (dist){
return (function (){
var s__38110__$1 = s__38110;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__38110__$1);
if(temp__5720__auto__){
var s__38110__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38110__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__38110__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__38112 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__38111 = (0);
while(true){
if((i__38111 < size__4522__auto__)){
var vec__38113 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__38111);
var sides = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38113,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38113,(1),null);
cljs.core.chunk_append(b__38112,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.roll-distribution","div.roll-distribution",765148688),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["dist-d",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sides)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),["dist-d",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sides)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dnd_roller.core.bar_chart,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),((window.innerWidth / (4)) | (0)),new cljs.core.Keyword(null,"height","height",1025178622),(100),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__38111,vec__38113,sides,data,c__4521__auto__,size__4522__auto__,b__38112,s__38110__$2,temp__5720__auto__,dist){
return (function (_PERCENT_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,_PERCENT_,(0))], null);
});})(i__38111,vec__38113,sides,data,c__4521__auto__,size__4522__auto__,b__38112,s__38110__$2,temp__5720__auto__,dist))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,cljs.core.range.cljs$core$IFn$_invoke$arity$1(sides)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dnd_roller.core.bar,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dataKey","dataKey",-334896751),"data",new cljs.core.Keyword(null,"fill","fill",883462889),"#FFF"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["D",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sides)].join('')," #",cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(data))], null)], null));

var G__38133 = (i__38111 + (1));
i__38111 = G__38133;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38112),dnd_roller$core$_LT_distribution_GT__$_iter__38109(cljs.core.chunk_rest(s__38110__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38112),null);
}
} else {
var vec__38116 = cljs.core.first(s__38110__$2);
var sides = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38116,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38116,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.roll-distribution","div.roll-distribution",765148688),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["dist-d",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sides)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),["dist-d",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sides)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dnd_roller.core.bar_chart,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),((window.innerWidth / (4)) | (0)),new cljs.core.Keyword(null,"height","height",1025178622),(100),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__38116,sides,data,s__38110__$2,temp__5720__auto__,dist){
return (function (_PERCENT_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,_PERCENT_,(0))], null);
});})(vec__38116,sides,data,s__38110__$2,temp__5720__auto__,dist))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,cljs.core.range.cljs$core$IFn$_invoke$arity$1(sides)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dnd_roller.core.bar,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dataKey","dataKey",-334896751),"data",new cljs.core.Keyword(null,"fill","fill",883462889),"#FFF"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["D",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sides)].join('')," #",cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(data))], null)], null),dnd_roller$core$_LT_distribution_GT__$_iter__38109(cljs.core.rest(s__38110__$2)));
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
