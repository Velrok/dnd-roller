goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__25723){
var vec__25724 = p__25723;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25724,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25724,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__25729 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25729,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25729,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25729,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__25740 = arguments.length;
switch (G__25740) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__25748_25936 = clojure.data.equality_partition;
var G__25749_25937 = "null";
var G__25750_25938 = ((function (G__25748_25936,G__25749_25937){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__25748_25936,G__25749_25937))
;
goog.object.set(G__25748_25936,G__25749_25937,G__25750_25938);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__25751_25939 = clojure.data.equality_partition;
var G__25752_25940 = "string";
var G__25753_25941 = ((function (G__25751_25939,G__25752_25940){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__25751_25939,G__25752_25940))
;
goog.object.set(G__25751_25939,G__25752_25940,G__25753_25941);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__25760_25942 = clojure.data.equality_partition;
var G__25761_25943 = "number";
var G__25762_25944 = ((function (G__25760_25942,G__25761_25943){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__25760_25942,G__25761_25943))
;
goog.object.set(G__25760_25942,G__25761_25943,G__25762_25944);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__25772_25945 = clojure.data.equality_partition;
var G__25773_25946 = "array";
var G__25774_25947 = ((function (G__25772_25945,G__25773_25946){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__25772_25945,G__25773_25946))
;
goog.object.set(G__25772_25945,G__25773_25946,G__25774_25947);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__25782_25948 = clojure.data.equality_partition;
var G__25783_25949 = "function";
var G__25784_25950 = ((function (G__25782_25948,G__25783_25949){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__25782_25948,G__25783_25949))
;
goog.object.set(G__25782_25948,G__25783_25949,G__25784_25950);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__25786_25951 = clojure.data.equality_partition;
var G__25787_25952 = "boolean";
var G__25788_25953 = ((function (G__25786_25951,G__25787_25952){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__25786_25951,G__25787_25952))
;
goog.object.set(G__25786_25951,G__25787_25952,G__25788_25953);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__25793_25964 = clojure.data.equality_partition;
var G__25794_25965 = "_";
var G__25795_25966 = ((function (G__25793_25964,G__25794_25965){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__25793_25964,G__25794_25965))
;
goog.object.set(G__25793_25964,G__25794_25965,G__25795_25966);
goog.object.set(clojure.data.Diff,"null",true);

var G__25807_25998 = clojure.data.diff_similar;
var G__25808_25999 = "null";
var G__25809_26000 = ((function (G__25807_25998,G__25808_25999){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__25807_25998,G__25808_25999))
;
goog.object.set(G__25807_25998,G__25808_25999,G__25809_26000);

goog.object.set(clojure.data.Diff,"string",true);

var G__25810_26005 = clojure.data.diff_similar;
var G__25811_26006 = "string";
var G__25812_26007 = ((function (G__25810_26005,G__25811_26006){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__25810_26005,G__25811_26006))
;
goog.object.set(G__25810_26005,G__25811_26006,G__25812_26007);

goog.object.set(clojure.data.Diff,"number",true);

var G__25817_26008 = clojure.data.diff_similar;
var G__25818_26009 = "number";
var G__25819_26010 = ((function (G__25817_26008,G__25818_26009){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__25817_26008,G__25818_26009))
;
goog.object.set(G__25817_26008,G__25818_26009,G__25819_26010);

goog.object.set(clojure.data.Diff,"array",true);

var G__25820_26014 = clojure.data.diff_similar;
var G__25821_26015 = "array";
var G__25822_26016 = ((function (G__25820_26014,G__25821_26015){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__25820_26014,G__25821_26015))
;
goog.object.set(G__25820_26014,G__25821_26015,G__25822_26016);

goog.object.set(clojure.data.Diff,"function",true);

var G__25823_26017 = clojure.data.diff_similar;
var G__25824_26018 = "function";
var G__25825_26019 = ((function (G__25823_26017,G__25824_26018){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__25823_26017,G__25824_26018))
;
goog.object.set(G__25823_26017,G__25824_26018,G__25825_26019);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__25828_26023 = clojure.data.diff_similar;
var G__25829_26024 = "boolean";
var G__25830_26025 = ((function (G__25828_26023,G__25829_26024){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__25828_26023,G__25829_26024))
;
goog.object.set(G__25828_26023,G__25829_26024,G__25830_26025);

goog.object.set(clojure.data.Diff,"_",true);

var G__25831_26028 = clojure.data.diff_similar;
var G__25832_26029 = "_";
var G__25833_26030 = ((function (G__25831_26028,G__25832_26029){
return (function (a,b){
var fexpr__25841 = (function (){var G__25842 = clojure.data.equality_partition(a);
var G__25842__$1 = (((G__25842 instanceof cljs.core.Keyword))?G__25842.fqn:null);
switch (G__25842__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25842__$1)].join('')));

}
})();
return (fexpr__25841.cljs$core$IFn$_invoke$arity$2 ? fexpr__25841.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__25841.call(null,a,b));
});})(G__25831_26028,G__25832_26029))
;
goog.object.set(G__25831_26028,G__25832_26029,G__25833_26030);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
