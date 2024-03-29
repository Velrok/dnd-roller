goog.provide('reagent.impl.component');
goog.require('cljs.core');
goog.require('goog.object');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
goog.require('reagent.impl.util');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
goog.require('reagent.debug');
reagent.impl.component.extract_props = (function reagent$impl$component$extract_props(v){
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);
if(cljs.core.map_QMARK_(p)){
return p;
} else {
return null;
}
});
reagent.impl.component.extract_children = (function reagent$impl$component$extract_children(v){
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);
var first_child = (((((p == null)) || (cljs.core.map_QMARK_(p))))?(2):(1));
if((cljs.core.count(v) > first_child)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,first_child);
} else {
return null;
}
});
reagent.impl.component.props_argv = (function reagent$impl$component$props_argv(c,p){
var temp__5722__auto__ = p.argv;
if((temp__5722__auto__ == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.constructor,reagent.impl.util.shallow_obj_to_map(p)], null);
} else {
var a = temp__5722__auto__;
return a;
}
});
reagent.impl.component.get_argv = (function reagent$impl$component$get_argv(c){
return reagent.impl.component.props_argv(c,c.props);
});
reagent.impl.component.get_props = (function reagent$impl$component$get_props(c){
var p = c.props;
var temp__5722__auto__ = p.argv;
if((temp__5722__auto__ == null)){
return reagent.impl.util.shallow_obj_to_map(p);
} else {
var v = temp__5722__auto__;
return reagent.impl.component.extract_props(v);
}
});
reagent.impl.component.get_children = (function reagent$impl$component$get_children(c){
var p = c.props;
var temp__5722__auto__ = p.argv;
if((temp__5722__auto__ == null)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var G__37066 = p.children;
return module$node_modules$react$index.Children.toArray(G__37066);
})());
} else {
var v = temp__5722__auto__;
return reagent.impl.component.extract_children(v);
}
});
reagent.impl.component.reagent_class_QMARK_ = (function reagent$impl$component$reagent_class_QMARK_(c){
return ((cljs.core.fn_QMARK_(c)) && ((!(((function (){var G__37081 = c;
var G__37081__$1 = (((G__37081 == null))?null:G__37081.prototype);
if((G__37081__$1 == null)){
return null;
} else {
return G__37081__$1.reagentRender;
}
})() == null)))));
});
reagent.impl.component.react_class_QMARK_ = (function reagent$impl$component$react_class_QMARK_(c){
return ((cljs.core.fn_QMARK_(c)) && ((!(((function (){var G__37091 = c;
var G__37091__$1 = (((G__37091 == null))?null:G__37091.prototype);
if((G__37091__$1 == null)){
return null;
} else {
return G__37091__$1.render;
}
})() == null)))));
});
reagent.impl.component.reagent_component_QMARK_ = (function reagent$impl$component$reagent_component_QMARK_(c){
return (!((c.reagentRender == null)));
});
reagent.impl.component.state_atom = (function reagent$impl$component$state_atom(this$){
var sa = this$.cljsState;
if((!((sa == null)))){
return sa;
} else {
return this$.cljsState = reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(null);
}
});
/**
 * Calls the render function of the component `c`.  If result `res` evaluates to a:
 *   1) Vector (form-1 component) - Treats the vector as hiccup and returns
 *      a react element with a render function based on that hiccup
 *   2) Function (form-2 component) - updates the render function to `res` i.e. the internal function
 *      and calls wrap-render again (`recur`), until the render result doesn't evaluate to a function.
 *   3) Anything else - Returns the result of evaluating `c`
 */
reagent.impl.component.wrap_render = (function reagent$impl$component$wrap_render(c,compiler){
while(true){
var f = c.reagentRender;
var _ = ((cljs.core.ifn_QMARK_(f))?null:(function(){throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0))].join(''),"\n","(clojure.core/ifn? f)"].join('')))})());
var res = ((c.cljsLegacyRender === true)?f.call(c,c):(function (){var v = reagent.impl.component.get_argv(c);
var n = cljs.core.count(v);
var G__37125 = n;
switch (G__37125) {
case (1):
return f.call(c);

break;
case (2):
return f.call(c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1)));

break;
case (3):
return f.call(c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(2)));

break;
case (4):
return f.call(c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(3)));

break;
case (5):
return f.call(c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(4)));

break;
default:
return f.apply(c,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(v).slice((1)));

}
})());
if(cljs.core.vector_QMARK_(res)){
return reagent.impl.protocols.as_element(compiler,res);
} else {
if(cljs.core.ifn_QMARK_(res)){
var f__$1 = ((reagent.impl.component.reagent_class_QMARK_(res))?((function (c,compiler,f,_,res){
return (function() { 
var G__37349__delegate = function (args){
return reagent.impl.protocols.as_element(compiler,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,res,args));
};
var G__37349 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37350__i = 0, G__37350__a = new Array(arguments.length -  0);
while (G__37350__i < G__37350__a.length) {G__37350__a[G__37350__i] = arguments[G__37350__i + 0]; ++G__37350__i;}
  args = new cljs.core.IndexedSeq(G__37350__a,0,null);
} 
return G__37349__delegate.call(this,args);};
G__37349.cljs$lang$maxFixedArity = 0;
G__37349.cljs$lang$applyTo = (function (arglist__37351){
var args = cljs.core.seq(arglist__37351);
return G__37349__delegate(args);
});
G__37349.cljs$core$IFn$_invoke$arity$variadic = G__37349__delegate;
return G__37349;
})()
;})(c,compiler,f,_,res))
:res);
c.reagentRender = f__$1;

var G__37352 = c;
var G__37353 = compiler;
c = G__37352;
compiler = G__37353;
continue;
} else {
return res;

}
}
break;
}
});
reagent.impl.component.component_name = (function reagent$impl$component$component_name(c){
var or__4131__auto__ = (function (){var G__37138 = c;
var G__37138__$1 = (((G__37138 == null))?null:G__37138.constructor);
if((G__37138__$1 == null)){
return null;
} else {
return G__37138__$1.displayName;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__37142 = c;
var G__37142__$1 = (((G__37142 == null))?null:G__37142.constructor);
if((G__37142__$1 == null)){
return null;
} else {
return G__37142__$1.name;
}
}
});
reagent.impl.component.comp_name = (function reagent$impl$component$comp_name(){
var c = reagent.impl.component._STAR_current_component_STAR_;
var n = reagent.impl.component.component_name(c);
if((!(cljs.core.empty_QMARK_(n)))){
return [" (in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),")"].join('');
} else {
return "";
}

});
reagent.impl.component.do_render = (function reagent$impl$component$do_render(c,compiler){
var _STAR_current_component_STAR__orig_val__37161 = reagent.impl.component._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__37162 = c;
reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__37162;

try{return reagent.impl.component.wrap_render(c,compiler);
}finally {reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__37161;
}});
reagent.impl.component.rat_opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-cache","no-cache",1588056370),true], null);
reagent.impl.component.custom_wrapper = (function reagent$impl$component$custom_wrapper(key,f){
var G__37172 = key;
var G__37172__$1 = (((G__37172 instanceof cljs.core.Keyword))?G__37172.fqn:null);
switch (G__37172__$1) {
case "getDefaultProps":
throw (new Error("getDefaultProps not supported"));

break;
case "getDerivedStateFromProps":
return ((function (G__37172,G__37172__$1){
return (function reagent$impl$component$custom_wrapper_$_getDerivedStateFromProps(props,state){
return f.call(null,(function (){var temp__5722__auto__ = props.argv;
if((temp__5722__auto__ == null)){
return props;
} else {
var a = temp__5722__auto__;
return reagent.impl.component.extract_props(a);
}
})(),state);
});
;})(G__37172,G__37172__$1))

break;
case "getInitialState":
return ((function (G__37172,G__37172__$1){
return (function reagent$impl$component$custom_wrapper_$_getInitialState(c){
return cljs.core.reset_BANG_(reagent.impl.component.state_atom(c),f.call(c,c));
});
;})(G__37172,G__37172__$1))

break;
case "getSnapshotBeforeUpdate":
return ((function (G__37172,G__37172__$1){
return (function reagent$impl$component$custom_wrapper_$_getSnapshotBeforeUpdate(oldprops,oldstate){
var c = this;
return f.call(c,c,reagent.impl.component.props_argv(c,oldprops),oldstate);
});
;})(G__37172,G__37172__$1))

break;
case "componentWillReceiveProps":
return ((function (G__37172,G__37172__$1){
return (function reagent$impl$component$custom_wrapper_$_componentWillReceiveProps(nextprops){
var c = this;
return f.call(c,c,reagent.impl.component.props_argv(c,nextprops));
});
;})(G__37172,G__37172__$1))

break;
case "UNSAFE_componentWillReceiveProps":
return ((function (G__37172,G__37172__$1){
return (function reagent$impl$component$custom_wrapper_$_componentWillReceiveProps(nextprops){
var c = this;
return f.call(c,c,reagent.impl.component.props_argv(c,nextprops));
});
;})(G__37172,G__37172__$1))

break;
case "shouldComponentUpdate":
return ((function (G__37172,G__37172__$1){
return (function reagent$impl$component$custom_wrapper_$_shouldComponentUpdate(nextprops,nextstate){
var or__4131__auto__ = reagent.impl.util._STAR_always_update_STAR_;
if(or__4131__auto__){
return or__4131__auto__;
} else {
var c = this;
var old_argv = c.props.argv;
var new_argv = nextprops.argv;
var noargv = (((old_argv == null)) || ((new_argv == null)));
if((f == null)){
var or__4131__auto____$1 = noargv;
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
try{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_argv,new_argv);
}catch (e37223){var e = e37223;
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).warn(["Warning: ","Exception thrown while comparing argv's in shouldComponentUpdate: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(old_argv)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_argv)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''));
} else {
}

return false;
}}
} else {
if(noargv){
return f.call(c,c,reagent.impl.component.get_argv(c),reagent.impl.component.props_argv(c,nextprops));
} else {
return f.call(c,c,old_argv,new_argv);

}
}
}
});
;})(G__37172,G__37172__$1))

break;
case "componentWillUpdate":
return ((function (G__37172,G__37172__$1){
return (function reagent$impl$component$custom_wrapper_$_componentWillUpdate(nextprops,nextstate){
var c = this;
return f.call(c,c,reagent.impl.component.props_argv(c,nextprops),nextstate);
});
;})(G__37172,G__37172__$1))

break;
case "UNSAFE_componentWillUpdate":
return ((function (G__37172,G__37172__$1){
return (function reagent$impl$component$custom_wrapper_$_componentWillUpdate(nextprops,nextstate){
var c = this;
return f.call(c,c,reagent.impl.component.props_argv(c,nextprops),nextstate);
});
;})(G__37172,G__37172__$1))

break;
case "componentDidUpdate":
return ((function (G__37172,G__37172__$1){
return (function reagent$impl$component$custom_wrapper_$_componentDidUpdate(oldprops,oldstate,snapshot){
var c = this;
return f.call(c,c,reagent.impl.component.props_argv(c,oldprops),oldstate,snapshot);
});
;})(G__37172,G__37172__$1))

break;
case "componentWillMount":
return ((function (G__37172,G__37172__$1){
return (function reagent$impl$component$custom_wrapper_$_componentWillMount(){
var c = this;
return f.call(c,c);
});
;})(G__37172,G__37172__$1))

break;
case "UNSAFE_componentWillMount":
return ((function (G__37172,G__37172__$1){
return (function reagent$impl$component$custom_wrapper_$_componentWillMount(){
var c = this;
return f.call(c,c);
});
;})(G__37172,G__37172__$1))

break;
case "componentDidMount":
return ((function (G__37172,G__37172__$1){
return (function reagent$impl$component$custom_wrapper_$_componentDidMount(){
var c = this;
return f.call(c,c);
});
;})(G__37172,G__37172__$1))

break;
case "componentWillUnmount":
return ((function (G__37172,G__37172__$1){
return (function reagent$impl$component$custom_wrapper_$_componentWillUnmount(){
var c = this;
var G__37234_37387 = goog.object.get(c,"cljsRatom");
if((G__37234_37387 == null)){
} else {
reagent.ratom.dispose_BANG_(G__37234_37387);
}

reagent.impl.batching.mark_rendered(c);

if((f == null)){
return null;
} else {
return f.call(c,c);
}
});
;})(G__37172,G__37172__$1))

break;
case "componentDidCatch":
return ((function (G__37172,G__37172__$1){
return (function reagent$impl$component$custom_wrapper_$_componentDidCatch(error,info){
var c = this;
return f.call(c,c,error,info);
});
;})(G__37172,G__37172__$1))

break;
default:
return null;

}
});
reagent.impl.component.get_wrapper = (function reagent$impl$component$get_wrapper(key,f){
var wrap = reagent.impl.component.custom_wrapper(key,f);
if(cljs.core.truth_((function (){var and__4120__auto__ = wrap;
if(cljs.core.truth_(and__4120__auto__)){
return f;
} else {
return and__4120__auto__;
}
})())){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0))].join(''),"\n","(clojure.core/ifn? f)"].join('')));
}
} else {
}

var or__4131__auto__ = wrap;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return f;
}
});
reagent.impl.component.obligatory = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),null,new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),null], null);
reagent.impl.component.dash_to_method_name = reagent.impl.util.memoize_1(reagent.impl.util.dash_to_method_name);
reagent.impl.component.camelify_map_keys = (function reagent$impl$component$camelify_map_keys(fun_map){
return cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((reagent.impl.component.dash_to_method_name.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.component.dash_to_method_name.cljs$core$IFn$_invoke$arity$1(k) : reagent.impl.component.dash_to_method_name.call(null,k))),v);
}),cljs.core.PersistentArrayMap.EMPTY,fun_map);
});
reagent.impl.component.add_obligatory = (function reagent$impl$component$add_obligatory(fun_map){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reagent.impl.component.obligatory,fun_map], 0));
});
reagent.impl.component.wrap_funs = (function reagent$impl$component$wrap_funs(fmap,compiler){
var renders_37392 = cljs.core.select_keys(fmap,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383)], null));
var render_fun_37393 = cljs.core.first(cljs.core.vals(renders_37392));
if(cljs.core.not(new cljs.core.Keyword(null,"componentFunction","componentFunction",825866104).cljs$core$IFn$_invoke$arity$1(fmap))){
} else {
throw (new Error(["Assert failed: ",":component-function is no longer supported, use :reagent-render instead.","\n","(not (:componentFunction fmap))"].join('')));
}

if((cljs.core.count(renders_37392) > (0))){
} else {
throw (new Error(["Assert failed: ","Missing reagent-render","\n","(pos? (count renders))"].join('')));
}

if(((1) === cljs.core.count(renders_37392))){
} else {
throw (new Error(["Assert failed: ","Too many render functions supplied","\n","(== 1 (count renders))"].join('')));
}

if(cljs.core.ifn_QMARK_(render_fun_37393)){
} else {
throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([render_fun_37393], 0))].join(''),"\n","(clojure.core/ifn? render-fun)"].join('')));
}


var render_fun = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383).cljs$core$IFn$_invoke$arity$1(fmap);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(fmap);
}
})();
var legacy_render = (new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383).cljs$core$IFn$_invoke$arity$1(fmap) == null);
var name = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"displayName","displayName",-809144601).cljs$core$IFn$_invoke$arity$1(fmap);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = reagent.impl.util.fun_name(render_fun);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("reagent"));
}
}
})();
var fmap__$1 = cljs.core.reduce_kv(((function (render_fun,legacy_render,name){
return (function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,reagent.impl.component.get_wrapper(k,v));
});})(render_fun,legacy_render,name))
,cljs.core.PersistentArrayMap.EMPTY,fmap);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(fmap__$1,new cljs.core.Keyword(null,"displayName","displayName",-809144601),name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cljsLegacyRender","cljsLegacyRender",-1527295613),legacy_render,new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383),render_fun,new cljs.core.Keyword(null,"render","render",-1408033454),((function (render_fun,legacy_render,name,fmap__$1){
return (function reagent$impl$component$wrap_funs_$_render(){
var c = this;
if(reagent.impl.util._STAR_non_reactive_STAR_){
return reagent.impl.component.do_render(c,compiler);
} else {
var rat = goog.object.get(c,"cljsRatom");
reagent.impl.batching.mark_rendered(c);

if((rat == null)){
return reagent.ratom.run_in_reaction(((function (rat,c,render_fun,legacy_render,name,fmap__$1){
return (function (){
return reagent.impl.component.do_render(c,compiler);
});})(rat,c,render_fun,legacy_render,name,fmap__$1))
,c,"cljsRatom",reagent.impl.batching.queue_render,reagent.impl.component.rat_opts);
} else {
return rat._run(false);
}
}
});})(render_fun,legacy_render,name,fmap__$1))
], 0));
});
reagent.impl.component.map_to_js = (function reagent$impl$component$map_to_js(m){
return cljs.core.reduce_kv((function (o,k,v){
var G__37269 = o;
var G__37271_37397 = G__37269;
var G__37272_37398 = cljs.core.name(k);
var G__37273_37399 = v;
goog.object.set(G__37271_37397,G__37272_37398,G__37273_37399);

return G__37269;
}),({}),m);
});
reagent.impl.component.cljsify = (function reagent$impl$component$cljsify(body,compiler){
return reagent.impl.component.wrap_funs(reagent.impl.component.add_obligatory(reagent.impl.component.camelify_map_keys(body)),compiler);
});
reagent.impl.component.built_in_static_method_names = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"childContextTypes","childContextTypes",578717991),new cljs.core.Keyword(null,"contextTypes","contextTypes",-2023853910),new cljs.core.Keyword(null,"contextType","contextType",1033066077),new cljs.core.Keyword(null,"getDerivedStateFromProps","getDerivedStateFromProps",-991834739),new cljs.core.Keyword(null,"getDerivedStateFromError","getDerivedStateFromError",166658477)], null);
/**
 * Creates JS class based on provided Clojure map.
 * 
 *   Map keys should use `React.Component` method names (https://reactjs.org/docs/react-component.html),
 *   and can be provided in snake-case or camelCase.
 *   Constructor function is defined using key `:getInitialState`.
 * 
 *   React built-in static methods or properties are automatically defined as statics.
 */
reagent.impl.component.create_class = (function reagent$impl$component$create_class(body,compiler){
if(cljs.core.map_QMARK_(body)){
} else {
throw (new Error("Assert failed: (map? body)"));
}

var body__$1 = reagent.impl.component.cljsify(body,compiler);
var methods$ = reagent.impl.component.map_to_js(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc,body__$1,new cljs.core.Keyword(null,"displayName","displayName",-809144601),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"constructor","constructor",-1953928811),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383),reagent.impl.component.built_in_static_method_names], 0)));
var static_methods = reagent.impl.component.map_to_js(cljs.core.select_keys(body__$1,reagent.impl.component.built_in_static_method_names));
var display_name = new cljs.core.Keyword(null,"displayName","displayName",-809144601).cljs$core$IFn$_invoke$arity$1(body__$1);
var get_initial_state = new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916).cljs$core$IFn$_invoke$arity$1(body__$1);
var construct = new cljs.core.Keyword(null,"constructor","constructor",-1953928811).cljs$core$IFn$_invoke$arity$1(body__$1);
var cmp = ((function (body__$1,methods$,static_methods,display_name,get_initial_state,construct){
return (function (props,context,updater){
var this$ = this;
module$node_modules$react$index.Component.call(this$,props,context,updater);

if(cljs.core.truth_(construct)){
(construct.cljs$core$IFn$_invoke$arity$2 ? construct.cljs$core$IFn$_invoke$arity$2(this$,props) : construct.call(null,this$,props));
} else {
}

if(cljs.core.truth_(get_initial_state)){
this$.state = (get_initial_state.cljs$core$IFn$_invoke$arity$1 ? get_initial_state.cljs$core$IFn$_invoke$arity$1(this$) : get_initial_state.call(null,this$));
} else {
}

this$.cljsMountOrder = reagent.impl.batching.next_mount_count();

return this$;
});})(body__$1,methods$,static_methods,display_name,get_initial_state,construct))
;
var G__37280_37418 = cmp.prototype;
var G__37281_37419 = module$node_modules$react$index.Component.prototype;
var G__37282_37420 = methods$;
goog.object.extend(G__37280_37418,G__37281_37419,G__37282_37420);

if(cljs.core.truth_(new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(body__$1))){
cmp.prototype.render = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(body__$1);
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383).cljs$core$IFn$_invoke$arity$1(body__$1))){
cmp.prototype.reagentRender = new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383).cljs$core$IFn$_invoke$arity$1(body__$1);
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"cljsLegacyRender","cljsLegacyRender",-1527295613).cljs$core$IFn$_invoke$arity$1(body__$1))){
cmp.prototype.cljsLegacyRender = new cljs.core.Keyword(null,"cljsLegacyRender","cljsLegacyRender",-1527295613).cljs$core$IFn$_invoke$arity$1(body__$1);
} else {
}

goog.object.extend(cmp,module$node_modules$react$index.Component,static_methods);

if(cljs.core.truth_(display_name)){
cmp.displayName = display_name;

cmp.cljs$lang$ctorStr = display_name;

cmp.cljs$lang$ctorPrWriter = ((function (body__$1,methods$,static_methods,display_name,get_initial_state,construct,cmp){
return (function (this$,writer,opt){
return cljs.core._write(writer,display_name);
});})(body__$1,methods$,static_methods,display_name,get_initial_state,construct,cmp))
;

Object.defineProperty(cmp,"name",({"value": display_name, "writable": false}));
} else {
}

cmp.cljs$lang$type = true;

cmp.prototype.constructor = cmp;

return cmp;
});
reagent.impl.component.cached_react_class = (function reagent$impl$component$cached_react_class(compiler,c){
var G__37287 = c;
var G__37288 = reagent.impl.protocols.get_id(compiler);
return goog.object.get(G__37287,G__37288);
});
reagent.impl.component.cache_react_class = (function reagent$impl$component$cache_react_class(compiler,c,constructor$){
var G__37289_37449 = c;
var G__37290_37450 = reagent.impl.protocols.get_id(compiler);
var G__37291_37451 = constructor$;
goog.object.set(G__37289_37449,G__37290_37450,G__37291_37451);

return constructor$;
});
reagent.impl.component.fn_to_class = (function reagent$impl$component$fn_to_class(compiler,f){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0))].join(''),"\n","(clojure.core/ifn? f)"].join('')));
}

if((!((!(((reagent.impl.component.react_class_QMARK_(f)) && ((!(reagent.impl.component.reagent_class_QMARK_(f)))))))))){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).warn(["Warning: ","Using native React classes directly in Hiccup forms ","is not supported. Use create-element or ","adapt-react-class instead: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = reagent.impl.util.fun_name(f);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return f;
}
})()),reagent.impl.component.comp_name()].join(''));
} else {
}
} else {
}

if(reagent.impl.component.reagent_class_QMARK_(f)){
return reagent.impl.component.cache_react_class(compiler,f,f);
} else {
var spec = cljs.core.meta(f);
var withrender = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),f);
var res = reagent.impl.component.create_class(withrender,compiler);
return reagent.impl.component.cache_react_class(compiler,f,res);
}
});
reagent.impl.component.as_class = (function reagent$impl$component$as_class(tag,compiler){
var temp__5722__auto__ = reagent.impl.component.cached_react_class(compiler,tag);
if((temp__5722__auto__ == null)){
return reagent.impl.component.fn_to_class(compiler,tag);
} else {
var cached_class = temp__5722__auto__;
return cached_class;
}
});
reagent.impl.component.reactify_component = (function reagent$impl$component$reactify_component(comp,compiler){
if(reagent.impl.component.react_class_QMARK_(comp)){
return comp;
} else {
return reagent.impl.component.as_class(comp,compiler);
}
});
reagent.impl.component.functional_wrap_render = (function reagent$impl$component$functional_wrap_render(compiler,c){
while(true){
var f = c.reagentRender;
var _ = ((cljs.core.ifn_QMARK_(f))?null:(function(){throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0))].join(''),"\n","(clojure.core/ifn? f)"].join('')))})());
var argv = c.argv;
var res = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,argv);
if(cljs.core.vector_QMARK_(res)){
return reagent.impl.protocols.as_element(compiler,res);
} else {
if(cljs.core.ifn_QMARK_(res)){
var f__$1 = ((reagent.impl.component.reagent_class_QMARK_(res))?((function (compiler,c,f,_,argv,res){
return (function() { 
var G__37478__delegate = function (args){
return reagent.impl.protocols.as_element(compiler,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,res,args));
};
var G__37478 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37479__i = 0, G__37479__a = new Array(arguments.length -  0);
while (G__37479__i < G__37479__a.length) {G__37479__a[G__37479__i] = arguments[G__37479__i + 0]; ++G__37479__i;}
  args = new cljs.core.IndexedSeq(G__37479__a,0,null);
} 
return G__37478__delegate.call(this,args);};
G__37478.cljs$lang$maxFixedArity = 0;
G__37478.cljs$lang$applyTo = (function (arglist__37480){
var args = cljs.core.seq(arglist__37480);
return G__37478__delegate(args);
});
G__37478.cljs$core$IFn$_invoke$arity$variadic = G__37478__delegate;
return G__37478;
})()
;})(compiler,c,f,_,argv,res))
:res);
c.reagentRender = f__$1;

var G__37481 = compiler;
var G__37482 = c;
compiler = G__37481;
c = G__37482;
continue;
} else {
return res;

}
}
break;
}
});
reagent.impl.component.functional_do_render = (function reagent$impl$component$functional_do_render(compiler,c){
var _STAR_current_component_STAR__orig_val__37309 = reagent.impl.component._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__37310 = c;
reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__37310;

try{return reagent.impl.component.functional_wrap_render(compiler,c);
}finally {reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__37309;
}});
reagent.impl.component.functional_render = (function reagent$impl$component$functional_render(compiler,jsprops){
if(reagent.impl.util._STAR_non_reactive_STAR_){
return reagent.impl.component.functional_do_render(compiler,jsprops);
} else {
var argv = jsprops.argv;
var tag = jsprops.reagentRender;
var vec__37311 = module$node_modules$react$index.useState((0));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37311,(0),null);
var update_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37311,(1),null);
var state_ref = module$node_modules$react$index.useRef();
var ___$1 = (cljs.core.truth_(state_ref.current)?null:(function (){var obj = ({});
obj.forceUpdate = ((function (obj,argv,tag,vec__37311,_,update_count,state_ref){
return (function (){
return (update_count.cljs$core$IFn$_invoke$arity$1 ? update_count.cljs$core$IFn$_invoke$arity$1(cljs.core.inc) : update_count.call(null,cljs.core.inc));
});})(obj,argv,tag,vec__37311,_,update_count,state_ref))
;

obj.cljsMountOrder = reagent.impl.batching.next_mount_count();

obj.constructor = tag;

obj.reagentRender = tag;

return state_ref.current = obj;
})());
var reagent_state = state_ref.current;
var rat = goog.object.get(reagent_state,"cljsRatom");
var G__37317_37495 = ((function (argv,tag,vec__37311,_,update_count,state_ref,___$1,reagent_state,rat){
return (function reagent$impl$component$functional_render_$_mount(){
return ((function (argv,tag,vec__37311,_,update_count,state_ref,___$1,reagent_state,rat){
return (function reagent$impl$component$functional_render_$_mount_$_unmount(){
var G__37319 = goog.object.get(reagent_state,"cljsRatom");
if((G__37319 == null)){
return null;
} else {
return reagent.ratom.dispose_BANG_(G__37319);
}
});
;})(argv,tag,vec__37311,_,update_count,state_ref,___$1,reagent_state,rat))
});})(argv,tag,vec__37311,_,update_count,state_ref,___$1,reagent_state,rat))
;
var G__37318_37496 = [];
module$node_modules$react$index.useEffect(G__37317_37495,G__37318_37496);

reagent_state.argv = argv;

reagent.impl.batching.mark_rendered(reagent_state);

if((rat == null)){
return reagent.ratom.run_in_reaction(((function (argv,tag,vec__37311,_,update_count,state_ref,___$1,reagent_state,rat){
return (function (){
return reagent.impl.component.functional_do_render(compiler,reagent_state);
});})(argv,tag,vec__37311,_,update_count,state_ref,___$1,reagent_state,rat))
,reagent_state,"cljsRatom",reagent.impl.batching.queue_render,reagent.impl.component.rat_opts);
} else {
return rat._run(false);
}
}
});
reagent.impl.component.functional_render_memo_fn = (function reagent$impl$component$functional_render_memo_fn(prev_props,next_props){
var old_argv = prev_props.argv;
var new_argv = next_props.argv;
var and__4120__auto__ = reagent.impl.util._STAR_always_update_STAR_ === false;
if(and__4120__auto__){
try{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_argv,new_argv);
}catch (e37321){var e = e37321;
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).warn(["Warning: ","Exception thrown while comparing argv's in shouldComponentUpdate: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(old_argv)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_argv)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''));
} else {
}

return false;
}} else {
return and__4120__auto__;
}
});
/**
 * Create copy of functional-render with displayName set to name of the
 *   original Reagent component.
 */
reagent.impl.component.functional_render_fn = (function reagent$impl$component$functional_render_fn(compiler,tag){
var or__4131__auto__ = reagent.impl.component.cached_react_class(compiler,tag);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var f = ((function (or__4131__auto__){
return (function (jsprops){
return reagent.impl.component.functional_render(compiler,jsprops);
});})(or__4131__auto__))
;
var display_name = reagent.impl.util.fun_name(tag);
var _ = f.displayName = display_name;
var ___$1 = Object.defineProperty(f,"name",({"value": display_name, "writable": false}));
var f__$1 = module$node_modules$react$index.memo(f,reagent.impl.component.functional_render_memo_fn);
reagent.impl.component.cache_react_class(compiler,tag,f__$1);

return f__$1;
}
});

//# sourceMappingURL=reagent.impl.component.js.map
