goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37314 = arguments.length;
var i__4731__auto___37315 = (0);
while(true){
if((i__4731__auto___37315 < len__4730__auto___37314)){
args__4736__auto__.push((arguments[i__4731__auto___37315]));

var G__37316 = (i__4731__auto___37315 + (1));
i__4731__auto___37315 = G__37316;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37055){
var G__37056 = cljs.core.first(seq37055);
var seq37055__$1 = cljs.core.next(seq37055);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37056,seq37055__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5718__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5718__auto__)){
var s = temp__5718__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__37063){
var map__37064 = p__37063;
var map__37064__$1 = (((((!((map__37064 == null))))?(((((map__37064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37064.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37064):map__37064);
var src = map__37064__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37064__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37064__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37067 = cljs.core.seq(sources);
var chunk__37068 = null;
var count__37069 = (0);
var i__37070 = (0);
while(true){
if((i__37070 < count__37069)){
var map__37079 = chunk__37068.cljs$core$IIndexed$_nth$arity$2(null,i__37070);
var map__37079__$1 = (((((!((map__37079 == null))))?(((((map__37079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37079):map__37079);
var src = map__37079__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37079__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37079__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37079__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37079__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__37322 = seq__37067;
var G__37323 = chunk__37068;
var G__37324 = count__37069;
var G__37325 = (i__37070 + (1));
seq__37067 = G__37322;
chunk__37068 = G__37323;
count__37069 = G__37324;
i__37070 = G__37325;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__37067);
if(temp__5720__auto__){
var seq__37067__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37067__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37067__$1);
var G__37326 = cljs.core.chunk_rest(seq__37067__$1);
var G__37327 = c__4550__auto__;
var G__37328 = cljs.core.count(c__4550__auto__);
var G__37329 = (0);
seq__37067 = G__37326;
chunk__37068 = G__37327;
count__37069 = G__37328;
i__37070 = G__37329;
continue;
} else {
var map__37082 = cljs.core.first(seq__37067__$1);
var map__37082__$1 = (((((!((map__37082 == null))))?(((((map__37082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37082):map__37082);
var src = map__37082__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37082__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37082__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37082__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37082__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__37330 = cljs.core.next(seq__37067__$1);
var G__37331 = null;
var G__37332 = (0);
var G__37333 = (0);
seq__37067 = G__37330;
chunk__37068 = G__37331;
count__37069 = G__37332;
i__37070 = G__37333;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37087 = cljs.core.seq(js_requires);
var chunk__37088 = null;
var count__37089 = (0);
var i__37090 = (0);
while(true){
if((i__37090 < count__37089)){
var js_ns = chunk__37088.cljs$core$IIndexed$_nth$arity$2(null,i__37090);
var require_str_37334 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37334);


var G__37335 = seq__37087;
var G__37336 = chunk__37088;
var G__37337 = count__37089;
var G__37338 = (i__37090 + (1));
seq__37087 = G__37335;
chunk__37088 = G__37336;
count__37089 = G__37337;
i__37090 = G__37338;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__37087);
if(temp__5720__auto__){
var seq__37087__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37087__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37087__$1);
var G__37339 = cljs.core.chunk_rest(seq__37087__$1);
var G__37340 = c__4550__auto__;
var G__37341 = cljs.core.count(c__4550__auto__);
var G__37342 = (0);
seq__37087 = G__37339;
chunk__37088 = G__37340;
count__37089 = G__37341;
i__37090 = G__37342;
continue;
} else {
var js_ns = cljs.core.first(seq__37087__$1);
var require_str_37343 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37343);


var G__37344 = cljs.core.next(seq__37087__$1);
var G__37345 = null;
var G__37346 = (0);
var G__37347 = (0);
seq__37087 = G__37344;
chunk__37088 = G__37345;
count__37089 = G__37346;
i__37090 = G__37347;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__37094 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__37094) : callback.call(null,G__37094));
} else {
var G__37095 = shadow.cljs.devtools.client.env.files_url();
var G__37096 = ((function (G__37095){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__37095))
;
var G__37097 = "POST";
var G__37098 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__37099 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__37095,G__37096,G__37097,G__37098,G__37099);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__37102){
var map__37103 = p__37102;
var map__37103__$1 = (((((!((map__37103 == null))))?(((((map__37103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37103):map__37103);
var msg = map__37103__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37103__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37103__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__37105 = info;
var map__37105__$1 = (((((!((map__37105 == null))))?(((((map__37105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37105):map__37105);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37105__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37105__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__37105,map__37105__$1,sources,compiled,map__37103,map__37103__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37107(s__37108){
return (new cljs.core.LazySeq(null,((function (map__37105,map__37105__$1,sources,compiled,map__37103,map__37103__$1,msg,info,reload_info){
return (function (){
var s__37108__$1 = s__37108;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__37108__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var map__37113 = cljs.core.first(xs__6277__auto__);
var map__37113__$1 = (((((!((map__37113 == null))))?(((((map__37113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37113):map__37113);
var src = map__37113__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37113__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37113__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__37108__$1,map__37113,map__37113__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__37105,map__37105__$1,sources,compiled,map__37103,map__37103__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37107_$_iter__37109(s__37110){
return (new cljs.core.LazySeq(null,((function (s__37108__$1,map__37113,map__37113__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__37105,map__37105__$1,sources,compiled,map__37103,map__37103__$1,msg,info,reload_info){
return (function (){
var s__37110__$1 = s__37110;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__37110__$1);
if(temp__5720__auto____$1){
var s__37110__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37110__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__37110__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__37112 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__37111 = (0);
while(true){
if((i__37111 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__37111);
cljs.core.chunk_append(b__37112,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37355 = (i__37111 + (1));
i__37111 = G__37355;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37112),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37107_$_iter__37109(cljs.core.chunk_rest(s__37110__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37112),null);
}
} else {
var warning = cljs.core.first(s__37110__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37107_$_iter__37109(cljs.core.rest(s__37110__$2)));
}
} else {
return null;
}
break;
}
});})(s__37108__$1,map__37113,map__37113__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__37105,map__37105__$1,sources,compiled,map__37103,map__37103__$1,msg,info,reload_info))
,null,null));
});})(s__37108__$1,map__37113,map__37113__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__37105,map__37105__$1,sources,compiled,map__37103,map__37103__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37107(cljs.core.rest(s__37108__$1)));
} else {
var G__37356 = cljs.core.rest(s__37108__$1);
s__37108__$1 = G__37356;
continue;
}
} else {
var G__37357 = cljs.core.rest(s__37108__$1);
s__37108__$1 = G__37357;
continue;
}
} else {
return null;
}
break;
}
});})(map__37105,map__37105__$1,sources,compiled,map__37103,map__37103__$1,msg,info,reload_info))
,null,null));
});})(map__37105,map__37105__$1,sources,compiled,map__37103,map__37103__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__37115_37358 = cljs.core.seq(warnings);
var chunk__37116_37359 = null;
var count__37117_37360 = (0);
var i__37118_37361 = (0);
while(true){
if((i__37118_37361 < count__37117_37360)){
var map__37123_37362 = chunk__37116_37359.cljs$core$IIndexed$_nth$arity$2(null,i__37118_37361);
var map__37123_37363__$1 = (((((!((map__37123_37362 == null))))?(((((map__37123_37362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37123_37362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37123_37362):map__37123_37362);
var w_37364 = map__37123_37363__$1;
var msg_37365__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37123_37363__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37366 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37123_37363__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37367 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37123_37363__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37368 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37123_37363__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37368)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37366),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37367),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37365__$1)].join(''));


var G__37369 = seq__37115_37358;
var G__37370 = chunk__37116_37359;
var G__37371 = count__37117_37360;
var G__37372 = (i__37118_37361 + (1));
seq__37115_37358 = G__37369;
chunk__37116_37359 = G__37370;
count__37117_37360 = G__37371;
i__37118_37361 = G__37372;
continue;
} else {
var temp__5720__auto___37373 = cljs.core.seq(seq__37115_37358);
if(temp__5720__auto___37373){
var seq__37115_37374__$1 = temp__5720__auto___37373;
if(cljs.core.chunked_seq_QMARK_(seq__37115_37374__$1)){
var c__4550__auto___37375 = cljs.core.chunk_first(seq__37115_37374__$1);
var G__37376 = cljs.core.chunk_rest(seq__37115_37374__$1);
var G__37377 = c__4550__auto___37375;
var G__37378 = cljs.core.count(c__4550__auto___37375);
var G__37379 = (0);
seq__37115_37358 = G__37376;
chunk__37116_37359 = G__37377;
count__37117_37360 = G__37378;
i__37118_37361 = G__37379;
continue;
} else {
var map__37126_37380 = cljs.core.first(seq__37115_37374__$1);
var map__37126_37381__$1 = (((((!((map__37126_37380 == null))))?(((((map__37126_37380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37126_37380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37126_37380):map__37126_37380);
var w_37382 = map__37126_37381__$1;
var msg_37383__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37126_37381__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37384 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37126_37381__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37385 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37126_37381__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37386 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37126_37381__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37386)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37384),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37385),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37383__$1)].join(''));


var G__37388 = cljs.core.next(seq__37115_37374__$1);
var G__37389 = null;
var G__37390 = (0);
var G__37391 = (0);
seq__37115_37358 = G__37388;
chunk__37116_37359 = G__37389;
count__37117_37360 = G__37390;
i__37118_37361 = G__37391;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__37105,map__37105__$1,sources,compiled,warnings,map__37103,map__37103__$1,msg,info,reload_info){
return (function (p__37128){
var map__37129 = p__37128;
var map__37129__$1 = (((((!((map__37129 == null))))?(((((map__37129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37129):map__37129);
var src = map__37129__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37129__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37129__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__37105,map__37105__$1,sources,compiled,warnings,map__37103,map__37103__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__37105,map__37105__$1,sources,compiled,warnings,map__37103,map__37103__$1,msg,info,reload_info){
return (function (p__37131){
var map__37132 = p__37131;
var map__37132__$1 = (((((!((map__37132 == null))))?(((((map__37132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37132):map__37132);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37132__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__37105,map__37105__$1,sources,compiled,warnings,map__37103,map__37103__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__37105,map__37105__$1,sources,compiled,warnings,map__37103,map__37103__$1,msg,info,reload_info){
return (function (p__37134){
var map__37135 = p__37134;
var map__37135__$1 = (((((!((map__37135 == null))))?(((((map__37135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37135):map__37135);
var rc = map__37135__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37135__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__37105,map__37105__$1,sources,compiled,warnings,map__37103,map__37103__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__37105,map__37105__$1,sources,compiled,warnings,map__37103,map__37103__$1,msg,info,reload_info){
return (function (p1__37101_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37101_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__37105,map__37105__$1,sources,compiled,warnings,map__37103,map__37103__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new),"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4120__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4120__auto____$1){
return new$;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__37139){
var map__37140 = p__37139;
var map__37140__$1 = (((((!((map__37140 == null))))?(((((map__37140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37140):map__37140);
var msg = map__37140__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37140__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__37143 = cljs.core.seq(updates);
var chunk__37145 = null;
var count__37146 = (0);
var i__37147 = (0);
while(true){
if((i__37147 < count__37146)){
var path = chunk__37145.cljs$core$IIndexed$_nth$arity$2(null,i__37147);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37192_37400 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37195_37401 = null;
var count__37196_37402 = (0);
var i__37197_37403 = (0);
while(true){
if((i__37197_37403 < count__37196_37402)){
var node_37404 = chunk__37195_37401.cljs$core$IIndexed$_nth$arity$2(null,i__37197_37403);
var path_match_37405 = shadow.cljs.devtools.client.browser.match_paths(node_37404.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37405)){
var new_link_37406 = (function (){var G__37222 = node_37404.cloneNode(true);
G__37222.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37405),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37222;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37405], 0));

goog.dom.insertSiblingAfter(new_link_37406,node_37404);

goog.dom.removeNode(node_37404);


var G__37407 = seq__37192_37400;
var G__37408 = chunk__37195_37401;
var G__37409 = count__37196_37402;
var G__37410 = (i__37197_37403 + (1));
seq__37192_37400 = G__37407;
chunk__37195_37401 = G__37408;
count__37196_37402 = G__37409;
i__37197_37403 = G__37410;
continue;
} else {
var G__37411 = seq__37192_37400;
var G__37412 = chunk__37195_37401;
var G__37413 = count__37196_37402;
var G__37414 = (i__37197_37403 + (1));
seq__37192_37400 = G__37411;
chunk__37195_37401 = G__37412;
count__37196_37402 = G__37413;
i__37197_37403 = G__37414;
continue;
}
} else {
var temp__5720__auto___37415 = cljs.core.seq(seq__37192_37400);
if(temp__5720__auto___37415){
var seq__37192_37416__$1 = temp__5720__auto___37415;
if(cljs.core.chunked_seq_QMARK_(seq__37192_37416__$1)){
var c__4550__auto___37417 = cljs.core.chunk_first(seq__37192_37416__$1);
var G__37421 = cljs.core.chunk_rest(seq__37192_37416__$1);
var G__37422 = c__4550__auto___37417;
var G__37423 = cljs.core.count(c__4550__auto___37417);
var G__37424 = (0);
seq__37192_37400 = G__37421;
chunk__37195_37401 = G__37422;
count__37196_37402 = G__37423;
i__37197_37403 = G__37424;
continue;
} else {
var node_37425 = cljs.core.first(seq__37192_37416__$1);
var path_match_37426 = shadow.cljs.devtools.client.browser.match_paths(node_37425.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37426)){
var new_link_37427 = (function (){var G__37224 = node_37425.cloneNode(true);
G__37224.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37426),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37224;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37426], 0));

goog.dom.insertSiblingAfter(new_link_37427,node_37425);

goog.dom.removeNode(node_37425);


var G__37428 = cljs.core.next(seq__37192_37416__$1);
var G__37429 = null;
var G__37430 = (0);
var G__37431 = (0);
seq__37192_37400 = G__37428;
chunk__37195_37401 = G__37429;
count__37196_37402 = G__37430;
i__37197_37403 = G__37431;
continue;
} else {
var G__37432 = cljs.core.next(seq__37192_37416__$1);
var G__37433 = null;
var G__37434 = (0);
var G__37435 = (0);
seq__37192_37400 = G__37432;
chunk__37195_37401 = G__37433;
count__37196_37402 = G__37434;
i__37197_37403 = G__37435;
continue;
}
}
} else {
}
}
break;
}


var G__37436 = seq__37143;
var G__37437 = chunk__37145;
var G__37438 = count__37146;
var G__37439 = (i__37147 + (1));
seq__37143 = G__37436;
chunk__37145 = G__37437;
count__37146 = G__37438;
i__37147 = G__37439;
continue;
} else {
var G__37441 = seq__37143;
var G__37442 = chunk__37145;
var G__37443 = count__37146;
var G__37444 = (i__37147 + (1));
seq__37143 = G__37441;
chunk__37145 = G__37442;
count__37146 = G__37443;
i__37147 = G__37444;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__37143);
if(temp__5720__auto__){
var seq__37143__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37143__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37143__$1);
var G__37445 = cljs.core.chunk_rest(seq__37143__$1);
var G__37446 = c__4550__auto__;
var G__37447 = cljs.core.count(c__4550__auto__);
var G__37448 = (0);
seq__37143 = G__37445;
chunk__37145 = G__37446;
count__37146 = G__37447;
i__37147 = G__37448;
continue;
} else {
var path = cljs.core.first(seq__37143__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37225_37452 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37228_37453 = null;
var count__37229_37454 = (0);
var i__37230_37455 = (0);
while(true){
if((i__37230_37455 < count__37229_37454)){
var node_37456 = chunk__37228_37453.cljs$core$IIndexed$_nth$arity$2(null,i__37230_37455);
var path_match_37457 = shadow.cljs.devtools.client.browser.match_paths(node_37456.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37457)){
var new_link_37458 = (function (){var G__37252 = node_37456.cloneNode(true);
G__37252.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37457),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37252;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37457], 0));

goog.dom.insertSiblingAfter(new_link_37458,node_37456);

goog.dom.removeNode(node_37456);


var G__37459 = seq__37225_37452;
var G__37460 = chunk__37228_37453;
var G__37461 = count__37229_37454;
var G__37462 = (i__37230_37455 + (1));
seq__37225_37452 = G__37459;
chunk__37228_37453 = G__37460;
count__37229_37454 = G__37461;
i__37230_37455 = G__37462;
continue;
} else {
var G__37463 = seq__37225_37452;
var G__37464 = chunk__37228_37453;
var G__37465 = count__37229_37454;
var G__37466 = (i__37230_37455 + (1));
seq__37225_37452 = G__37463;
chunk__37228_37453 = G__37464;
count__37229_37454 = G__37465;
i__37230_37455 = G__37466;
continue;
}
} else {
var temp__5720__auto___37467__$1 = cljs.core.seq(seq__37225_37452);
if(temp__5720__auto___37467__$1){
var seq__37225_37468__$1 = temp__5720__auto___37467__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37225_37468__$1)){
var c__4550__auto___37469 = cljs.core.chunk_first(seq__37225_37468__$1);
var G__37470 = cljs.core.chunk_rest(seq__37225_37468__$1);
var G__37471 = c__4550__auto___37469;
var G__37472 = cljs.core.count(c__4550__auto___37469);
var G__37473 = (0);
seq__37225_37452 = G__37470;
chunk__37228_37453 = G__37471;
count__37229_37454 = G__37472;
i__37230_37455 = G__37473;
continue;
} else {
var node_37474 = cljs.core.first(seq__37225_37468__$1);
var path_match_37475 = shadow.cljs.devtools.client.browser.match_paths(node_37474.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37475)){
var new_link_37476 = (function (){var G__37260 = node_37474.cloneNode(true);
G__37260.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37475),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37260;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37475], 0));

goog.dom.insertSiblingAfter(new_link_37476,node_37474);

goog.dom.removeNode(node_37474);


var G__37483 = cljs.core.next(seq__37225_37468__$1);
var G__37484 = null;
var G__37485 = (0);
var G__37486 = (0);
seq__37225_37452 = G__37483;
chunk__37228_37453 = G__37484;
count__37229_37454 = G__37485;
i__37230_37455 = G__37486;
continue;
} else {
var G__37487 = cljs.core.next(seq__37225_37468__$1);
var G__37488 = null;
var G__37489 = (0);
var G__37490 = (0);
seq__37225_37452 = G__37487;
chunk__37228_37453 = G__37488;
count__37229_37454 = G__37489;
i__37230_37455 = G__37490;
continue;
}
}
} else {
}
}
break;
}


var G__37491 = cljs.core.next(seq__37143__$1);
var G__37492 = null;
var G__37493 = (0);
var G__37494 = (0);
seq__37143 = G__37491;
chunk__37145 = G__37492;
count__37146 = G__37493;
i__37147 = G__37494;
continue;
} else {
var G__37497 = cljs.core.next(seq__37143__$1);
var G__37498 = null;
var G__37499 = (0);
var G__37500 = (0);
seq__37143 = G__37497;
chunk__37145 = G__37498;
count__37146 = G__37499;
i__37147 = G__37500;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__37261){
var map__37262 = p__37261;
var map__37262__$1 = (((((!((map__37262 == null))))?(((((map__37262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37262):map__37262);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37262__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37262__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__37262,map__37262__$1,id,js){
return (function (){
return eval(js);
});})(map__37262,map__37262__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__37264){
var map__37265 = p__37264;
var map__37265__$1 = (((((!((map__37265 == null))))?(((((map__37265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37265):map__37265);
var msg = map__37265__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37265__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37265__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37265__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37265__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__37265,map__37265__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__37267){
var map__37268 = p__37267;
var map__37268__$1 = (((((!((map__37268 == null))))?(((((map__37268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37268):map__37268);
var src = map__37268__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37268__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__37265,map__37265__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__37265,map__37265__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__37265,map__37265__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__37274){
var map__37275 = p__37274;
var map__37275__$1 = (((((!((map__37275 == null))))?(((((map__37275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37275):map__37275);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37275__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37275__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__37275,map__37275__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");
});})(map__37275,map__37275__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__37277){
var map__37278 = p__37277;
var map__37278__$1 = (((((!((map__37278 == null))))?(((((map__37278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37278):map__37278);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37278__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37278__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__37283){
var map__37284 = p__37283;
var map__37284__$1 = (((((!((map__37284 == null))))?(((((map__37284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37284):map__37284);
var msg = map__37284__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37284__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__37286 = type;
var G__37286__$1 = (((G__37286 instanceof cljs.core.Keyword))?G__37286.fqn:null);
switch (G__37286__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "repl/session-start":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
return shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__37293 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__37294 = ((function (G__37293){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__37293))
;
var G__37295 = "POST";
var G__37296 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__37297 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__37293,G__37294,G__37295,G__37296,G__37297);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5720__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4131__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e37301){var e = e37301;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5720__auto___37520 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto___37520)){
var s_37524 = temp__5720__auto___37520;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_37524.onclose = ((function (s_37524,temp__5720__auto___37520){
return (function (e){
return null;
});})(s_37524,temp__5720__auto___37520))
;

s_37524.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5720__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4120__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
