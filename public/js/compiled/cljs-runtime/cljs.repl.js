goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31510){
var map__31511 = p__31510;
var map__31511__$1 = (((((!((map__31511 == null))))?(((((map__31511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31511):map__31511);
var m = map__31511__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31511__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31511__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31513_31650 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31514_31651 = null;
var count__31515_31652 = (0);
var i__31516_31653 = (0);
while(true){
if((i__31516_31653 < count__31515_31652)){
var f_31654 = chunk__31514_31651.cljs$core$IIndexed$_nth$arity$2(null,i__31516_31653);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_31654], 0));


var G__31655 = seq__31513_31650;
var G__31656 = chunk__31514_31651;
var G__31657 = count__31515_31652;
var G__31658 = (i__31516_31653 + (1));
seq__31513_31650 = G__31655;
chunk__31514_31651 = G__31656;
count__31515_31652 = G__31657;
i__31516_31653 = G__31658;
continue;
} else {
var temp__5720__auto___31660 = cljs.core.seq(seq__31513_31650);
if(temp__5720__auto___31660){
var seq__31513_31661__$1 = temp__5720__auto___31660;
if(cljs.core.chunked_seq_QMARK_(seq__31513_31661__$1)){
var c__4550__auto___31662 = cljs.core.chunk_first(seq__31513_31661__$1);
var G__31663 = cljs.core.chunk_rest(seq__31513_31661__$1);
var G__31664 = c__4550__auto___31662;
var G__31665 = cljs.core.count(c__4550__auto___31662);
var G__31666 = (0);
seq__31513_31650 = G__31663;
chunk__31514_31651 = G__31664;
count__31515_31652 = G__31665;
i__31516_31653 = G__31666;
continue;
} else {
var f_31668 = cljs.core.first(seq__31513_31661__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_31668], 0));


var G__31669 = cljs.core.next(seq__31513_31661__$1);
var G__31670 = null;
var G__31671 = (0);
var G__31672 = (0);
seq__31513_31650 = G__31669;
chunk__31514_31651 = G__31670;
count__31515_31652 = G__31671;
i__31516_31653 = G__31672;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31673 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_31673], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_31673)))?cljs.core.second(arglists_31673):arglists_31673)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31521_31686 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31522_31687 = null;
var count__31523_31688 = (0);
var i__31524_31689 = (0);
while(true){
if((i__31524_31689 < count__31523_31688)){
var vec__31535_31690 = chunk__31522_31687.cljs$core$IIndexed$_nth$arity$2(null,i__31524_31689);
var name_31691 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31535_31690,(0),null);
var map__31538_31692 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31535_31690,(1),null);
var map__31538_31693__$1 = (((((!((map__31538_31692 == null))))?(((((map__31538_31692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31538_31692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31538_31692):map__31538_31692);
var doc_31694 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31538_31693__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31695 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31538_31693__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_31691], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_31695], 0));

if(cljs.core.truth_(doc_31694)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_31694], 0));
} else {
}


var G__31696 = seq__31521_31686;
var G__31697 = chunk__31522_31687;
var G__31698 = count__31523_31688;
var G__31699 = (i__31524_31689 + (1));
seq__31521_31686 = G__31696;
chunk__31522_31687 = G__31697;
count__31523_31688 = G__31698;
i__31524_31689 = G__31699;
continue;
} else {
var temp__5720__auto___31700 = cljs.core.seq(seq__31521_31686);
if(temp__5720__auto___31700){
var seq__31521_31701__$1 = temp__5720__auto___31700;
if(cljs.core.chunked_seq_QMARK_(seq__31521_31701__$1)){
var c__4550__auto___31702 = cljs.core.chunk_first(seq__31521_31701__$1);
var G__31703 = cljs.core.chunk_rest(seq__31521_31701__$1);
var G__31704 = c__4550__auto___31702;
var G__31705 = cljs.core.count(c__4550__auto___31702);
var G__31706 = (0);
seq__31521_31686 = G__31703;
chunk__31522_31687 = G__31704;
count__31523_31688 = G__31705;
i__31524_31689 = G__31706;
continue;
} else {
var vec__31540_31711 = cljs.core.first(seq__31521_31701__$1);
var name_31712 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31540_31711,(0),null);
var map__31543_31713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31540_31711,(1),null);
var map__31543_31714__$1 = (((((!((map__31543_31713 == null))))?(((((map__31543_31713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31543_31713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31543_31713):map__31543_31713);
var doc_31715 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31543_31714__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31716 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31543_31714__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_31712], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_31716], 0));

if(cljs.core.truth_(doc_31715)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_31715], 0));
} else {
}


var G__31730 = cljs.core.next(seq__31521_31701__$1);
var G__31731 = null;
var G__31732 = (0);
var G__31733 = (0);
seq__31521_31686 = G__31730;
chunk__31522_31687 = G__31731;
count__31523_31688 = G__31732;
i__31524_31689 = G__31733;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__31545 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31546 = null;
var count__31547 = (0);
var i__31548 = (0);
while(true){
if((i__31548 < count__31547)){
var role = chunk__31546.cljs$core$IIndexed$_nth$arity$2(null,i__31548);
var temp__5720__auto___31738__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___31738__$1)){
var spec_31739 = temp__5720__auto___31738__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_31739)], 0));
} else {
}


var G__31740 = seq__31545;
var G__31741 = chunk__31546;
var G__31742 = count__31547;
var G__31743 = (i__31548 + (1));
seq__31545 = G__31740;
chunk__31546 = G__31741;
count__31547 = G__31742;
i__31548 = G__31743;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__31545);
if(temp__5720__auto____$1){
var seq__31545__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__31545__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__31545__$1);
var G__31744 = cljs.core.chunk_rest(seq__31545__$1);
var G__31745 = c__4550__auto__;
var G__31746 = cljs.core.count(c__4550__auto__);
var G__31747 = (0);
seq__31545 = G__31744;
chunk__31546 = G__31745;
count__31547 = G__31746;
i__31548 = G__31747;
continue;
} else {
var role = cljs.core.first(seq__31545__$1);
var temp__5720__auto___31748__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___31748__$2)){
var spec_31749 = temp__5720__auto___31748__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_31749)], 0));
} else {
}


var G__31750 = cljs.core.next(seq__31545__$1);
var G__31751 = null;
var G__31752 = (0);
var G__31753 = (0);
seq__31545 = G__31750;
chunk__31546 = G__31751;
count__31547 = G__31752;
i__31548 = G__31753;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__31757 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__31758 = cljs.core.ex_cause(t);
via = G__31757;
t = G__31758;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__31567 = datafied_throwable;
var map__31567__$1 = (((((!((map__31567 == null))))?(((((map__31567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31567):map__31567);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31567__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31567__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31567__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__31568 = cljs.core.last(via);
var map__31568__$1 = (((((!((map__31568 == null))))?(((((map__31568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31568):map__31568);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31568__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31568__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31568__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__31569 = data;
var map__31569__$1 = (((((!((map__31569 == null))))?(((((map__31569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31569):map__31569);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31569__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31569__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31569__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__31570 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__31570__$1 = (((((!((map__31570 == null))))?(((((map__31570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31570):map__31570);
var top_data = map__31570__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31570__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__31579 = phase;
var G__31579__$1 = (((G__31579 instanceof cljs.core.Keyword))?G__31579.fqn:null);
switch (G__31579__$1) {
case "read-source":
var map__31580 = data;
var map__31580__$1 = (((((!((map__31580 == null))))?(((((map__31580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31580):map__31580);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31580__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31580__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__31582 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__31582__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31582,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31582);
var G__31582__$2 = (cljs.core.truth_((function (){var fexpr__31583 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31583.cljs$core$IFn$_invoke$arity$1 ? fexpr__31583.cljs$core$IFn$_invoke$arity$1(source) : fexpr__31583.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__31582__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31582__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31582__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31582__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__31584 = top_data;
var G__31584__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31584,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31584);
var G__31584__$2 = (cljs.core.truth_((function (){var fexpr__31585 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31585.cljs$core$IFn$_invoke$arity$1 ? fexpr__31585.cljs$core$IFn$_invoke$arity$1(source) : fexpr__31585.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__31584__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31584__$1);
var G__31584__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31584__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31584__$2);
var G__31584__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31584__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31584__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31584__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31584__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__31586 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31586,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31586,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31586,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31586,(3),null);
var G__31589 = top_data;
var G__31589__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31589,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__31589);
var G__31589__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31589__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__31589__$1);
var G__31589__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31589__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__31589__$2);
var G__31589__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31589__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31589__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31589__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31589__$4;
}

break;
case "execution":
var vec__31590 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31590,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31590,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31590,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31590,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__31590,source__$1,method,file,line,G__31579,G__31579__$1,map__31567,map__31567__$1,via,trace,phase,map__31568,map__31568__$1,type,message,data,map__31569,map__31569__$1,problems,fn,caller,map__31570,map__31570__$1,top_data,source){
return (function (p1__31566_SHARP_){
var or__4131__auto__ = (p1__31566_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__31595 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31595.cljs$core$IFn$_invoke$arity$1 ? fexpr__31595.cljs$core$IFn$_invoke$arity$1(p1__31566_SHARP_) : fexpr__31595.call(null,p1__31566_SHARP_));
}
});})(vec__31590,source__$1,method,file,line,G__31579,G__31579__$1,map__31567,map__31567__$1,via,trace,phase,map__31568,map__31568__$1,type,message,data,map__31569,map__31569__$1,problems,fn,caller,map__31570,map__31570__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__31600 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__31600__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31600,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__31600);
var G__31600__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31600__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31600__$1);
var G__31600__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31600__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__31600__$2);
var G__31600__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31600__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__31600__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31600__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31600__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31579__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__31610){
var map__31611 = p__31610;
var map__31611__$1 = (((((!((map__31611 == null))))?(((((map__31611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31611):map__31611);
var triage_data = map__31611__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31611__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31611__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31611__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31611__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31611__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31611__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31611__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31611__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__31613 = phase;
var G__31613__$1 = (((G__31613 instanceof cljs.core.Keyword))?G__31613.fqn:null);
switch (G__31613__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__31614 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__31615 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31616 = loc;
var G__31617 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31618_31768 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31619_31769 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31620_31770 = true;
var _STAR_print_fn_STAR__temp_val__31621_31771 = ((function (_STAR_print_newline_STAR__orig_val__31618_31768,_STAR_print_fn_STAR__orig_val__31619_31769,_STAR_print_newline_STAR__temp_val__31620_31770,sb__4661__auto__,G__31614,G__31615,G__31616,G__31613,G__31613__$1,loc,class_name,simple_class,cause_type,format,map__31611,map__31611__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__31618_31768,_STAR_print_fn_STAR__orig_val__31619_31769,_STAR_print_newline_STAR__temp_val__31620_31770,sb__4661__auto__,G__31614,G__31615,G__31616,G__31613,G__31613__$1,loc,class_name,simple_class,cause_type,format,map__31611,map__31611__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31620_31770;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31621_31771;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__31618_31768,_STAR_print_fn_STAR__orig_val__31619_31769,_STAR_print_newline_STAR__temp_val__31620_31770,_STAR_print_fn_STAR__temp_val__31621_31771,sb__4661__auto__,G__31614,G__31615,G__31616,G__31613,G__31613__$1,loc,class_name,simple_class,cause_type,format,map__31611,map__31611__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__31618_31768,_STAR_print_fn_STAR__orig_val__31619_31769,_STAR_print_newline_STAR__temp_val__31620_31770,_STAR_print_fn_STAR__temp_val__31621_31771,sb__4661__auto__,G__31614,G__31615,G__31616,G__31613,G__31613__$1,loc,class_name,simple_class,cause_type,format,map__31611,map__31611__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__31607_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__31607_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__31618_31768,_STAR_print_fn_STAR__orig_val__31619_31769,_STAR_print_newline_STAR__temp_val__31620_31770,_STAR_print_fn_STAR__temp_val__31621_31771,sb__4661__auto__,G__31614,G__31615,G__31616,G__31613,G__31613__$1,loc,class_name,simple_class,cause_type,format,map__31611,map__31611__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__31618_31768,_STAR_print_fn_STAR__orig_val__31619_31769,_STAR_print_newline_STAR__temp_val__31620_31770,_STAR_print_fn_STAR__temp_val__31621_31771,sb__4661__auto__,G__31614,G__31615,G__31616,G__31613,G__31613__$1,loc,class_name,simple_class,cause_type,format,map__31611,map__31611__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31619_31769;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31618_31768;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__31614,G__31615,G__31616,G__31617) : format.call(null,G__31614,G__31615,G__31616,G__31617));

break;
case "macroexpansion":
var G__31622 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__31623 = cause_type;
var G__31624 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31625 = loc;
var G__31626 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31622,G__31623,G__31624,G__31625,G__31626) : format.call(null,G__31622,G__31623,G__31624,G__31625,G__31626));

break;
case "compile-syntax-check":
var G__31627 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__31628 = cause_type;
var G__31629 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31630 = loc;
var G__31631 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31627,G__31628,G__31629,G__31630,G__31631) : format.call(null,G__31627,G__31628,G__31629,G__31630,G__31631));

break;
case "compilation":
var G__31632 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__31633 = cause_type;
var G__31634 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31635 = loc;
var G__31636 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31632,G__31633,G__31634,G__31635,G__31636) : format.call(null,G__31632,G__31633,G__31634,G__31635,G__31636));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__31637 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__31638 = symbol;
var G__31639 = loc;
var G__31640 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31641_31772 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31642_31773 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31643_31774 = true;
var _STAR_print_fn_STAR__temp_val__31644_31775 = ((function (_STAR_print_newline_STAR__orig_val__31641_31772,_STAR_print_fn_STAR__orig_val__31642_31773,_STAR_print_newline_STAR__temp_val__31643_31774,sb__4661__auto__,G__31637,G__31638,G__31639,G__31613,G__31613__$1,loc,class_name,simple_class,cause_type,format,map__31611,map__31611__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__31641_31772,_STAR_print_fn_STAR__orig_val__31642_31773,_STAR_print_newline_STAR__temp_val__31643_31774,sb__4661__auto__,G__31637,G__31638,G__31639,G__31613,G__31613__$1,loc,class_name,simple_class,cause_type,format,map__31611,map__31611__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31643_31774;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31644_31775;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__31641_31772,_STAR_print_fn_STAR__orig_val__31642_31773,_STAR_print_newline_STAR__temp_val__31643_31774,_STAR_print_fn_STAR__temp_val__31644_31775,sb__4661__auto__,G__31637,G__31638,G__31639,G__31613,G__31613__$1,loc,class_name,simple_class,cause_type,format,map__31611,map__31611__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__31641_31772,_STAR_print_fn_STAR__orig_val__31642_31773,_STAR_print_newline_STAR__temp_val__31643_31774,_STAR_print_fn_STAR__temp_val__31644_31775,sb__4661__auto__,G__31637,G__31638,G__31639,G__31613,G__31613__$1,loc,class_name,simple_class,cause_type,format,map__31611,map__31611__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__31608_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__31608_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__31641_31772,_STAR_print_fn_STAR__orig_val__31642_31773,_STAR_print_newline_STAR__temp_val__31643_31774,_STAR_print_fn_STAR__temp_val__31644_31775,sb__4661__auto__,G__31637,G__31638,G__31639,G__31613,G__31613__$1,loc,class_name,simple_class,cause_type,format,map__31611,map__31611__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__31641_31772,_STAR_print_fn_STAR__orig_val__31642_31773,_STAR_print_newline_STAR__temp_val__31643_31774,_STAR_print_fn_STAR__temp_val__31644_31775,sb__4661__auto__,G__31637,G__31638,G__31639,G__31613,G__31613__$1,loc,class_name,simple_class,cause_type,format,map__31611,map__31611__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31642_31773;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31641_31772;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__31637,G__31638,G__31639,G__31640) : format.call(null,G__31637,G__31638,G__31639,G__31640));
} else {
var G__31645 = "Execution error%s at %s(%s).\n%s\n";
var G__31646 = cause_type;
var G__31647 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31648 = loc;
var G__31649 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31645,G__31646,G__31647,G__31648,G__31649) : format.call(null,G__31645,G__31646,G__31647,G__31648,G__31649));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31613__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
