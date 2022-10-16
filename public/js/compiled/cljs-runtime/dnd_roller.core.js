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
dnd_roller.core.dice_sounds = (function (){var iter__4523__auto__ = (function dnd_roller$core$iter__26098(s__26099){
return (new cljs.core.LazySeq(null,(function (){
var s__26099__$1 = s__26099;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__26099__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var dice_type = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__26099__$1,dice_type,xs__6277__auto__,temp__5720__auto__){
return (function dnd_roller$core$iter__26098_$_iter__26100(s__26101){
return (new cljs.core.LazySeq(null,((function (s__26099__$1,dice_type,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__26101__$1 = s__26101;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__26101__$1);
if(temp__5720__auto____$1){
var s__26101__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__26101__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__26101__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__26103 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__26102 = (0);
while(true){
if((i__26102 < size__4522__auto__)){
var n = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__26102);
cljs.core.chunk_append(b__26103,["./audio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dice_type)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".m4a"].join(''));

var G__26163 = (i__26102 + (1));
i__26102 = G__26163;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26103),dnd_roller$core$iter__26098_$_iter__26100(cljs.core.chunk_rest(s__26101__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26103),null);
}
} else {
var n = cljs.core.first(s__26101__$2);
return cljs.core.cons(["./audio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dice_type)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".m4a"].join(''),dnd_roller$core$iter__26098_$_iter__26100(cljs.core.rest(s__26101__$2)));
}
} else {
return null;
}
break;
}
});})(s__26099__$1,dice_type,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__26099__$1,dice_type,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,dnd_roller$core$iter__26098(cljs.core.rest(s__26099__$1)));
} else {
var G__26164 = cljs.core.rest(s__26099__$1);
s__26099__$1 = G__26164;
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
return ((function (){var G__26104 = ((10) * x);
return Math.round(G__26104);
})() / (10));
});
if((typeof dnd_roller !== 'undefined') && (typeof dnd_roller.core !== 'undefined') && (typeof dnd_roller.core.history !== 'undefined')){
} else {
dnd_roller.core.history = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
}
dnd_roller.core.results_timeout = (30);
dnd_roller.core._LT_dice_roll_sounds_GT_ = (function dnd_roller$core$_LT_dice_roll_sounds_GT_(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4523__auto__ = (function dnd_roller$core$_LT_dice_roll_sounds_GT__$_iter__26105(s__26106){
return (new cljs.core.LazySeq(null,(function (){
var s__26106__$1 = s__26106;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__26106__$1);
if(temp__5720__auto__){
var s__26106__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26106__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__26106__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__26108 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__26107 = (0);
while(true){
if((i__26107 < size__4522__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__26107);
cljs.core.chunk_append(b__26108,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio","audio",1819127321),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),["da-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),new cljs.core.Keyword(null,"key","key",-1516042587),["dice-audio-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),s], null)], null)], null));

var G__26165 = (i__26107 + (1));
i__26107 = G__26165;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26108),dnd_roller$core$_LT_dice_roll_sounds_GT__$_iter__26105(cljs.core.chunk_rest(s__26106__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26108),null);
}
} else {
var s = cljs.core.first(s__26106__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio","audio",1819127321),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),["da-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),new cljs.core.Keyword(null,"key","key",-1516042587),["dice-audio-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),s], null)], null)], null),dnd_roller$core$_LT_dice_roll_sounds_GT__$_iter__26105(cljs.core.rest(s__26106__$2)));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dice-selector","div.dice-selector",-1932368513),(function (){var iter__4523__auto__ = (function dnd_roller$core$_LT_dice_selector_GT__$_iter__26109(s__26110){
return (new cljs.core.LazySeq(null,(function (){
var s__26110__$1 = s__26110;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__26110__$1);
if(temp__5720__auto__){
var s__26110__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26110__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__26110__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__26112 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__26111 = (0);
while(true){
if((i__26111 < size__4522__auto__)){
var d = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__26111);
cljs.core.chunk_append(b__26112,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dnd_roller.core._LT_dice_GT_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),["d-selection-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sides","sides",482708052).cljs$core$IFn$_invoke$arity$1(d))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"animation-name","animation-name",-302195330),"dice-roll-animation",new cljs.core.Keyword(null,"animation-play-state","animation-play-state",655922102),"paused",new cljs.core.Keyword(null,"animation-iteration-count","animation-iteration-count",-1410888227),"infinite",new cljs.core.Keyword(null,"animation-duration","animation-duration",-1261077706),"0.5s"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__26111,d,c__4521__auto__,size__4522__auto__,b__26112,s__26110__$2,temp__5720__auto__){
return (function (event){
var target_26166 = (function (){var G__26113 = event;
if((G__26113 == null)){
return null;
} else {
return G__26113.target;
}
})();
var G__26114_26167 = target_26166;
var G__26114_26168__$1 = (((G__26114_26167 == null))?null:G__26114_26167.style);
if((G__26114_26168__$1 == null)){
} else {
G__26114_26168__$1.setProperty("animation-play-state","running","");
}

setTimeout(((function (i__26111,target_26166,d,c__4521__auto__,size__4522__auto__,b__26112,s__26110__$2,temp__5720__auto__){
return (function (){
var G__26115 = target_26166;
var G__26115__$1 = (((G__26115 == null))?null:G__26115.style);
if((G__26115__$1 == null)){
return null;
} else {
return G__26115__$1.setProperty("animation-play-state","paused","");
}
});})(i__26111,target_26166,d,c__4521__auto__,size__4522__auto__,b__26112,s__26110__$2,temp__5720__auto__))
,(500));

dnd_roller.core.play_random_dice_sound(["d",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sides","sides",482708052).cljs$core$IFn$_invoke$arity$1(d))].join(''));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(dnd_roller.core.rolls,cljs.core.conj,dnd_roller.core.roll_dice_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.gensym.cljs$core$IFn$_invoke$arity$0())));

return cljs.core.reset_BANG_(dnd_roller.core.dice_selection_reset_timer,dnd_roller.core.results_timeout);
});})(i__26111,d,c__4521__auto__,size__4522__auto__,b__26112,s__26110__$2,temp__5720__auto__))
], null),d], null));

var G__26169 = (i__26111 + (1));
i__26111 = G__26169;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26112),dnd_roller$core$_LT_dice_selector_GT__$_iter__26109(cljs.core.chunk_rest(s__26110__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26112),null);
}
} else {
var d = cljs.core.first(s__26110__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dnd_roller.core._LT_dice_GT_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),["d-selection-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sides","sides",482708052).cljs$core$IFn$_invoke$arity$1(d))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"animation-name","animation-name",-302195330),"dice-roll-animation",new cljs.core.Keyword(null,"animation-play-state","animation-play-state",655922102),"paused",new cljs.core.Keyword(null,"animation-iteration-count","animation-iteration-count",-1410888227),"infinite",new cljs.core.Keyword(null,"animation-duration","animation-duration",-1261077706),"0.5s"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (d,s__26110__$2,temp__5720__auto__){
return (function (event){
var target_26170 = (function (){var G__26116 = event;
if((G__26116 == null)){
return null;
} else {
return G__26116.target;
}
})();
var G__26117_26171 = target_26170;
var G__26117_26172__$1 = (((G__26117_26171 == null))?null:G__26117_26171.style);
if((G__26117_26172__$1 == null)){
} else {
G__26117_26172__$1.setProperty("animation-play-state","running","");
}

setTimeout(((function (target_26170,d,s__26110__$2,temp__5720__auto__){
return (function (){
var G__26118 = target_26170;
var G__26118__$1 = (((G__26118 == null))?null:G__26118.style);
if((G__26118__$1 == null)){
return null;
} else {
return G__26118__$1.setProperty("animation-play-state","paused","");
}
});})(target_26170,d,s__26110__$2,temp__5720__auto__))
,(500));

dnd_roller.core.play_random_dice_sound(["d",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sides","sides",482708052).cljs$core$IFn$_invoke$arity$1(d))].join(''));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(dnd_roller.core.rolls,cljs.core.conj,dnd_roller.core.roll_dice_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.gensym.cljs$core$IFn$_invoke$arity$0())));

return cljs.core.reset_BANG_(dnd_roller.core.dice_selection_reset_timer,dnd_roller.core.results_timeout);
});})(d,s__26110__$2,temp__5720__auto__))
], null),d], null),dnd_roller$core$_LT_dice_selector_GT__$_iter__26109(cljs.core.rest(s__26110__$2)));
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
return (function dnd_roller$core$_LT_dice_board_GT__$_iter__26119(s__26120){
return (new cljs.core.LazySeq(null,((function (rolles,min_v,max_v){
return (function (){
var s__26120__$1 = s__26120;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__26120__$1);
if(temp__5720__auto__){
var s__26120__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26120__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__26120__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__26122 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__26121 = (0);
while(true){
if((i__26121 < size__4522__auto__)){
var d = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__26121);
cljs.core.chunk_append(b__26122,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.dice-board__roll","span.dice-board__roll",-589522274),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__26121,d,c__4521__auto__,size__4522__auto__,b__26122,s__26120__$2,temp__5720__auto__,rolles,min_v,max_v){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dnd_roller.core.rolls,((function (i__26121,d,c__4521__auto__,size__4522__auto__,b__26122,s__26120__$2,temp__5720__auto__,rolles,min_v,max_v){
return (function (ds){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (i__26121,d,c__4521__auto__,size__4522__auto__,b__26122,s__26120__$2,temp__5720__auto__,rolles,min_v,max_v){
return (function (dd){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dd));
});})(i__26121,d,c__4521__auto__,size__4522__auto__,b__26122,s__26120__$2,temp__5720__auto__,rolles,min_v,max_v))
,ds);
});})(i__26121,d,c__4521__auto__,size__4522__auto__,b__26122,s__26120__$2,temp__5720__auto__,rolles,min_v,max_v))
);
});})(i__26121,d,c__4521__auto__,size__4522__auto__,b__26122,s__26120__$2,temp__5720__auto__,rolles,min_v,max_v))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dnd_roller.core._LT_dice_GT_,cljs.core.PersistentArrayMap.EMPTY,d], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"3rem",new cljs.core.Keyword(null,"margin","margin",-995903681),"5px"], null),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(d)))?"crit-fail":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sides","sides",482708052).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(d)))?"crit-roll":null))], null),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "?";
}
})()], null)], null));

var G__26173 = (i__26121 + (1));
i__26121 = G__26173;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26122),dnd_roller$core$_LT_dice_board_GT__$_iter__26119(cljs.core.chunk_rest(s__26120__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26122),null);
}
} else {
var d = cljs.core.first(s__26120__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.dice-board__roll","span.dice-board__roll",-589522274),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (d,s__26120__$2,temp__5720__auto__,rolles,min_v,max_v){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dnd_roller.core.rolls,((function (d,s__26120__$2,temp__5720__auto__,rolles,min_v,max_v){
return (function (ds){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (d,s__26120__$2,temp__5720__auto__,rolles,min_v,max_v){
return (function (dd){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dd));
});})(d,s__26120__$2,temp__5720__auto__,rolles,min_v,max_v))
,ds);
});})(d,s__26120__$2,temp__5720__auto__,rolles,min_v,max_v))
);
});})(d,s__26120__$2,temp__5720__auto__,rolles,min_v,max_v))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dnd_roller.core._LT_dice_GT_,cljs.core.PersistentArrayMap.EMPTY,d], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"3rem",new cljs.core.Keyword(null,"margin","margin",-995903681),"5px"], null),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(d)))?"crit-fail":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sides","sides",482708052).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(d)))?"crit-roll":null))], null),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "?";
}
})()], null)], null),dnd_roller$core$_LT_dice_board_GT__$_iter__26119(cljs.core.rest(s__26120__$2)));
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
var dist = (function (){var iter__4523__auto__ = (function dnd_roller$core$_LT_distribution_GT__$_iter__26123(s__26124){
return (new cljs.core.LazySeq(null,(function (){
var s__26124__$1 = s__26124;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__26124__$1);
if(temp__5720__auto__){
var s__26124__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26124__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__26124__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__26126 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__26125 = (0);
while(true){
if((i__26125 < size__4522__auto__)){
var vec__26127 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__26125);
var sides = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26127,(0),null);
var results = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26127,(1),null);
cljs.core.chunk_append(b__26126,(function (){var distribution = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = ((function (i__26125,vec__26127,sides,results,c__4521__auto__,size__4522__auto__,b__26126,s__26124__$2,temp__5720__auto__){
return (function dnd_roller$core$_LT_distribution_GT__$_iter__26123_$_iter__26130(s__26131){
return (new cljs.core.LazySeq(null,((function (i__26125,vec__26127,sides,results,c__4521__auto__,size__4522__auto__,b__26126,s__26124__$2,temp__5720__auto__){
return (function (){
var s__26131__$1 = s__26131;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__26131__$1);
if(temp__5720__auto____$1){
var s__26131__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__26131__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__26131__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__26133 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__26132 = (0);
while(true){
if((i__26132 < size__4522__auto____$1)){
var vec__26134 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto____$1,i__26132);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26134,(0),null);
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26134,(1),null);
cljs.core.chunk_append(b__26133,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.count(items)], null));

var G__26174 = (i__26132 + (1));
i__26132 = G__26174;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26133),dnd_roller$core$_LT_distribution_GT__$_iter__26123_$_iter__26130(cljs.core.chunk_rest(s__26131__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26133),null);
}
} else {
var vec__26137 = cljs.core.first(s__26131__$2);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26137,(0),null);
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26137,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.count(items)], null),dnd_roller$core$_LT_distribution_GT__$_iter__26123_$_iter__26130(cljs.core.rest(s__26131__$2)));
}
} else {
return null;
}
break;
}
});})(i__26125,vec__26127,sides,results,c__4521__auto__,size__4522__auto__,b__26126,s__26124__$2,temp__5720__auto__))
,null,null));
});})(i__26125,vec__26127,sides,results,c__4521__auto__,size__4522__auto__,b__26126,s__26124__$2,temp__5720__auto__))
;
return iter__4523__auto__(cljs.core.group_by(new cljs.core.Keyword(null,"value","value",305978217),results));
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sides,distribution], null);
})());

var G__26175 = (i__26125 + (1));
i__26125 = G__26175;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26126),dnd_roller$core$_LT_distribution_GT__$_iter__26123(cljs.core.chunk_rest(s__26124__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26126),null);
}
} else {
var vec__26140 = cljs.core.first(s__26124__$2);
var sides = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26140,(0),null);
var results = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26140,(1),null);
return cljs.core.cons((function (){var distribution = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = ((function (vec__26140,sides,results,s__26124__$2,temp__5720__auto__){
return (function dnd_roller$core$_LT_distribution_GT__$_iter__26123_$_iter__26143(s__26144){
return (new cljs.core.LazySeq(null,((function (vec__26140,sides,results,s__26124__$2,temp__5720__auto__){
return (function (){
var s__26144__$1 = s__26144;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__26144__$1);
if(temp__5720__auto____$1){
var s__26144__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__26144__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__26144__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__26146 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__26145 = (0);
while(true){
if((i__26145 < size__4522__auto__)){
var vec__26147 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__26145);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26147,(0),null);
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26147,(1),null);
cljs.core.chunk_append(b__26146,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.count(items)], null));

var G__26176 = (i__26145 + (1));
i__26145 = G__26176;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26146),dnd_roller$core$_LT_distribution_GT__$_iter__26123_$_iter__26143(cljs.core.chunk_rest(s__26144__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26146),null);
}
} else {
var vec__26150 = cljs.core.first(s__26144__$2);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26150,(0),null);
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26150,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.count(items)], null),dnd_roller$core$_LT_distribution_GT__$_iter__26123_$_iter__26143(cljs.core.rest(s__26144__$2)));
}
} else {
return null;
}
break;
}
});})(vec__26140,sides,results,s__26124__$2,temp__5720__auto__))
,null,null));
});})(vec__26140,sides,results,s__26124__$2,temp__5720__auto__))
;
return iter__4523__auto__(cljs.core.group_by(new cljs.core.Keyword(null,"value","value",305978217),results));
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sides,distribution], null);
})(),dnd_roller$core$_LT_distribution_GT__$_iter__26123(cljs.core.rest(s__26124__$2)));
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
return (function dnd_roller$core$_LT_distribution_GT__$_iter__26153(s__26154){
return (new cljs.core.LazySeq(null,((function (dist){
return (function (){
var s__26154__$1 = s__26154;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__26154__$1);
if(temp__5720__auto__){
var s__26154__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26154__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__26154__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__26156 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__26155 = (0);
while(true){
if((i__26155 < size__4522__auto__)){
var vec__26157 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__26155);
var sides = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26157,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26157,(1),null);
cljs.core.chunk_append(b__26156,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.roll-distribution","div.roll-distribution",765148688),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["dist-d",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sides)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),["dist-d",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sides)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dnd_roller.core.bar_chart,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),((window.innerWidth / (4)) | (0)),new cljs.core.Keyword(null,"height","height",1025178622),(100),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__26155,vec__26157,sides,data,c__4521__auto__,size__4522__auto__,b__26156,s__26154__$2,temp__5720__auto__,dist){
return (function (_PERCENT_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,_PERCENT_,(0))], null);
});})(i__26155,vec__26157,sides,data,c__4521__auto__,size__4522__auto__,b__26156,s__26154__$2,temp__5720__auto__,dist))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,cljs.core.range.cljs$core$IFn$_invoke$arity$1(sides)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dnd_roller.core.bar,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dataKey","dataKey",-334896751),"data",new cljs.core.Keyword(null,"fill","fill",883462889),"#FFF"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["D",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sides)].join('')," #",cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(data))], null)], null));

var G__26177 = (i__26155 + (1));
i__26155 = G__26177;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26156),dnd_roller$core$_LT_distribution_GT__$_iter__26153(cljs.core.chunk_rest(s__26154__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26156),null);
}
} else {
var vec__26160 = cljs.core.first(s__26154__$2);
var sides = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26160,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26160,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.roll-distribution","div.roll-distribution",765148688),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["dist-d",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sides)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),["dist-d",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sides)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dnd_roller.core.bar_chart,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),((window.innerWidth / (4)) | (0)),new cljs.core.Keyword(null,"height","height",1025178622),(100),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__26160,sides,data,s__26154__$2,temp__5720__auto__,dist){
return (function (_PERCENT_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,_PERCENT_,(0))], null);
});})(vec__26160,sides,data,s__26154__$2,temp__5720__auto__,dist))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,cljs.core.range.cljs$core$IFn$_invoke$arity$1(sides)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dnd_roller.core.bar,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dataKey","dataKey",-334896751),"data",new cljs.core.Keyword(null,"fill","fill",883462889),"#FFF"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["D",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sides)].join('')," #",cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(data))], null)], null),dnd_roller$core$_LT_distribution_GT__$_iter__26153(cljs.core.rest(s__26154__$2)));
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
