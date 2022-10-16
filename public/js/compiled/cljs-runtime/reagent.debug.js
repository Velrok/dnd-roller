goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__35214__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__35214 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35215__i = 0, G__35215__a = new Array(arguments.length -  0);
while (G__35215__i < G__35215__a.length) {G__35215__a[G__35215__i] = arguments[G__35215__i + 0]; ++G__35215__i;}
  args = new cljs.core.IndexedSeq(G__35215__a,0,null);
} 
return G__35214__delegate.call(this,args);};
G__35214.cljs$lang$maxFixedArity = 0;
G__35214.cljs$lang$applyTo = (function (arglist__35216){
var args = cljs.core.seq(arglist__35216);
return G__35214__delegate(args);
});
G__35214.cljs$core$IFn$_invoke$arity$variadic = G__35214__delegate;
return G__35214;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__35218__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__35218 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35220__i = 0, G__35220__a = new Array(arguments.length -  0);
while (G__35220__i < G__35220__a.length) {G__35220__a[G__35220__i] = arguments[G__35220__i + 0]; ++G__35220__i;}
  args = new cljs.core.IndexedSeq(G__35220__a,0,null);
} 
return G__35218__delegate.call(this,args);};
G__35218.cljs$lang$maxFixedArity = 0;
G__35218.cljs$lang$applyTo = (function (arglist__35221){
var args = cljs.core.seq(arglist__35221);
return G__35218__delegate(args);
});
G__35218.cljs$core$IFn$_invoke$arity$variadic = G__35218__delegate;
return G__35218;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
