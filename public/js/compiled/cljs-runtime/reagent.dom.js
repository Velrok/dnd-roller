goog.provide('reagent.dom');
goog.require('cljs.core');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.input');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__37758 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__37759 = true;
reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__37759;

try{var G__37760 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__37761 = container;
var G__37762 = ((function (G__37760,G__37761,_STAR_always_update_STAR__orig_val__37758,_STAR_always_update_STAR__temp_val__37759){
return (function (){
var _STAR_always_update_STAR__orig_val__37763 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__37764 = false;
reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__37764;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__37763;
}});})(G__37760,G__37761,_STAR_always_update_STAR__orig_val__37758,_STAR_always_update_STAR__temp_val__37759))
;
return module$node_modules$react_dom$index.render(G__37760,G__37761,G__37762);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__37758;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__37766 = arguments.length;
switch (G__37766) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__37767 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37767,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37767,(1),null);
var f = ((function (vec__37767,compiler,callback){
return (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});})(vec__37767,compiler,callback))
;
return reagent.dom.render_comp(f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__37770_37793 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__37771_37794 = null;
var count__37772_37795 = (0);
var i__37773_37796 = (0);
while(true){
if((i__37773_37796 < count__37772_37795)){
var vec__37780_37797 = chunk__37771_37794.cljs$core$IIndexed$_nth$arity$2(null,i__37773_37796);
var container_37798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37780_37797,(0),null);
var comp_37799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37780_37797,(1),null);
reagent.dom.re_render_component(comp_37799,container_37798);


var G__37800 = seq__37770_37793;
var G__37801 = chunk__37771_37794;
var G__37802 = count__37772_37795;
var G__37803 = (i__37773_37796 + (1));
seq__37770_37793 = G__37800;
chunk__37771_37794 = G__37801;
count__37772_37795 = G__37802;
i__37773_37796 = G__37803;
continue;
} else {
var temp__5720__auto___37804 = cljs.core.seq(seq__37770_37793);
if(temp__5720__auto___37804){
var seq__37770_37805__$1 = temp__5720__auto___37804;
if(cljs.core.chunked_seq_QMARK_(seq__37770_37805__$1)){
var c__4550__auto___37806 = cljs.core.chunk_first(seq__37770_37805__$1);
var G__37807 = cljs.core.chunk_rest(seq__37770_37805__$1);
var G__37808 = c__4550__auto___37806;
var G__37809 = cljs.core.count(c__4550__auto___37806);
var G__37810 = (0);
seq__37770_37793 = G__37807;
chunk__37771_37794 = G__37808;
count__37772_37795 = G__37809;
i__37773_37796 = G__37810;
continue;
} else {
var vec__37783_37811 = cljs.core.first(seq__37770_37805__$1);
var container_37812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37783_37811,(0),null);
var comp_37813 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37783_37811,(1),null);
reagent.dom.re_render_component(comp_37813,container_37812);


var G__37814 = cljs.core.next(seq__37770_37805__$1);
var G__37815 = null;
var G__37816 = (0);
var G__37817 = (0);
seq__37770_37793 = G__37814;
chunk__37771_37794 = G__37815;
count__37772_37795 = G__37816;
i__37773_37796 = G__37817;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
