goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__34853 = coll;
var G__34854 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34853,G__34854) : shadow.dom.lazy_native_coll_seq.call(null,G__34853,G__34854));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4131__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__34883 = arguments.length;
switch (G__34883) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__34888 = arguments.length;
switch (G__34888) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__34892 = arguments.length;
switch (G__34892) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__34895 = arguments.length;
switch (G__34895) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__34898 = arguments.length;
switch (G__34898) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__34899 = document;
var G__34900 = shadow.dom.dom_node(el);
return goog.dom.contains(G__34899,G__34900);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__34901 = shadow.dom.dom_node(parent);
var G__34902 = shadow.dom.dom_node(el);
return goog.dom.contains(G__34901,G__34902);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__34903 = shadow.dom.dom_node(el);
var G__34904 = cls;
return goog.dom.classlist.add(G__34903,G__34904);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__34905 = shadow.dom.dom_node(el);
var G__34906 = cls;
return goog.dom.classlist.remove(G__34905,G__34906);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__34908 = arguments.length;
switch (G__34908) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__34909 = shadow.dom.dom_node(el);
var G__34910 = cls;
return goog.dom.classlist.toggle(G__34909,G__34910);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e34915){if((e34915 instanceof Object)){
var e = e34915;
return console.log("didnt support attachEvent",el,e);
} else {
throw e34915;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__34923 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__34924 = null;
var count__34925 = (0);
var i__34926 = (0);
while(true){
if((i__34926 < count__34925)){
var el = chunk__34924.cljs$core$IIndexed$_nth$arity$2(null,i__34926);
var handler_35578__$1 = ((function (seq__34923,chunk__34924,count__34925,i__34926,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34923,chunk__34924,count__34925,i__34926,el))
;
var G__34939_35579 = el;
var G__34940_35580 = cljs.core.name(ev);
var G__34941_35581 = handler_35578__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__34939_35579,G__34940_35580,G__34941_35581) : shadow.dom.dom_listen.call(null,G__34939_35579,G__34940_35580,G__34941_35581));


var G__35583 = seq__34923;
var G__35584 = chunk__34924;
var G__35585 = count__34925;
var G__35586 = (i__34926 + (1));
seq__34923 = G__35583;
chunk__34924 = G__35584;
count__34925 = G__35585;
i__34926 = G__35586;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__34923);
if(temp__5720__auto__){
var seq__34923__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34923__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__34923__$1);
var G__35587 = cljs.core.chunk_rest(seq__34923__$1);
var G__35588 = c__4550__auto__;
var G__35589 = cljs.core.count(c__4550__auto__);
var G__35590 = (0);
seq__34923 = G__35587;
chunk__34924 = G__35588;
count__34925 = G__35589;
i__34926 = G__35590;
continue;
} else {
var el = cljs.core.first(seq__34923__$1);
var handler_35592__$1 = ((function (seq__34923,chunk__34924,count__34925,i__34926,el,seq__34923__$1,temp__5720__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34923,chunk__34924,count__34925,i__34926,el,seq__34923__$1,temp__5720__auto__))
;
var G__34943_35593 = el;
var G__34944_35594 = cljs.core.name(ev);
var G__34945_35595 = handler_35592__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__34943_35593,G__34944_35594,G__34945_35595) : shadow.dom.dom_listen.call(null,G__34943_35593,G__34944_35594,G__34945_35595));


var G__35598 = cljs.core.next(seq__34923__$1);
var G__35599 = null;
var G__35600 = (0);
var G__35601 = (0);
seq__34923 = G__35598;
chunk__34924 = G__35599;
count__34925 = G__35600;
i__34926 = G__35601;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__34950 = arguments.length;
switch (G__34950) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__34955 = shadow.dom.dom_node(el);
var G__34956 = cljs.core.name(ev);
var G__34957 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__34955,G__34956,G__34957) : shadow.dom.dom_listen.call(null,G__34955,G__34956,G__34957));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__34960 = shadow.dom.dom_node(el);
var G__34961 = cljs.core.name(ev);
var G__34962 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__34960,G__34961,G__34962) : shadow.dom.dom_listen_remove.call(null,G__34960,G__34961,G__34962));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__34963 = cljs.core.seq(events);
var chunk__34964 = null;
var count__34965 = (0);
var i__34966 = (0);
while(true){
if((i__34966 < count__34965)){
var vec__34975 = chunk__34964.cljs$core$IIndexed$_nth$arity$2(null,i__34966);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34975,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34975,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35610 = seq__34963;
var G__35611 = chunk__34964;
var G__35612 = count__34965;
var G__35613 = (i__34966 + (1));
seq__34963 = G__35610;
chunk__34964 = G__35611;
count__34965 = G__35612;
i__34966 = G__35613;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__34963);
if(temp__5720__auto__){
var seq__34963__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34963__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__34963__$1);
var G__35615 = cljs.core.chunk_rest(seq__34963__$1);
var G__35616 = c__4550__auto__;
var G__35617 = cljs.core.count(c__4550__auto__);
var G__35618 = (0);
seq__34963 = G__35615;
chunk__34964 = G__35616;
count__34965 = G__35617;
i__34966 = G__35618;
continue;
} else {
var vec__34978 = cljs.core.first(seq__34963__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34978,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34978,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35619 = cljs.core.next(seq__34963__$1);
var G__35620 = null;
var G__35621 = (0);
var G__35622 = (0);
seq__34963 = G__35619;
chunk__34964 = G__35620;
count__34965 = G__35621;
i__34966 = G__35622;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__34983 = cljs.core.seq(styles);
var chunk__34984 = null;
var count__34985 = (0);
var i__34986 = (0);
while(true){
if((i__34986 < count__34985)){
var vec__35005 = chunk__34984.cljs$core$IIndexed$_nth$arity$2(null,i__34986);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35005,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35005,(1),null);
var G__35008_35625 = dom;
var G__35009_35626 = cljs.core.name(k);
var G__35010_35627 = (((v == null))?"":v);
goog.style.setStyle(G__35008_35625,G__35009_35626,G__35010_35627);


var G__35628 = seq__34983;
var G__35629 = chunk__34984;
var G__35630 = count__34985;
var G__35631 = (i__34986 + (1));
seq__34983 = G__35628;
chunk__34984 = G__35629;
count__34985 = G__35630;
i__34986 = G__35631;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__34983);
if(temp__5720__auto__){
var seq__34983__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34983__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__34983__$1);
var G__35632 = cljs.core.chunk_rest(seq__34983__$1);
var G__35633 = c__4550__auto__;
var G__35634 = cljs.core.count(c__4550__auto__);
var G__35635 = (0);
seq__34983 = G__35632;
chunk__34984 = G__35633;
count__34985 = G__35634;
i__34986 = G__35635;
continue;
} else {
var vec__35015 = cljs.core.first(seq__34983__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35015,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35015,(1),null);
var G__35018_35636 = dom;
var G__35019_35637 = cljs.core.name(k);
var G__35020_35638 = (((v == null))?"":v);
goog.style.setStyle(G__35018_35636,G__35019_35637,G__35020_35638);


var G__35639 = cljs.core.next(seq__34983__$1);
var G__35640 = null;
var G__35641 = (0);
var G__35642 = (0);
seq__34983 = G__35639;
chunk__34984 = G__35640;
count__34985 = G__35641;
i__34986 = G__35642;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__35030_35643 = key;
var G__35030_35644__$1 = (((G__35030_35643 instanceof cljs.core.Keyword))?G__35030_35643.fqn:null);
switch (G__35030_35644__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_35646 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_35646,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_35646,"aria-");
}
})())){
el.setAttribute(ks_35646,value);
} else {
(el[ks_35646] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__35047 = shadow.dom.dom_node(el);
var G__35048 = cls;
return goog.dom.classlist.contains(G__35047,G__35048);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__35051){
var map__35052 = p__35051;
var map__35052__$1 = (((((!((map__35052 == null))))?(((((map__35052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35052):map__35052);
var props = map__35052__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35052__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__35055 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35055,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35055,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35055,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__35058 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__35058,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__35058;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__35060 = arguments.length;
switch (G__35060) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__35061){
var vec__35062 = p__35061;
var seq__35063 = cljs.core.seq(vec__35062);
var first__35064 = cljs.core.first(seq__35063);
var seq__35063__$1 = cljs.core.next(seq__35063);
var nn = first__35064;
var first__35064__$1 = cljs.core.first(seq__35063__$1);
var seq__35063__$2 = cljs.core.next(seq__35063__$1);
var np = first__35064__$1;
var nc = seq__35063__$2;
var node = vec__35062;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35065 = nn;
var G__35066 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35065,G__35066) : create_fn.call(null,G__35065,G__35066));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35067 = nn;
var G__35068 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35067,G__35068) : create_fn.call(null,G__35067,G__35068));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35073 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35073,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35073,(1),null);
var seq__35076_35654 = cljs.core.seq(node_children);
var chunk__35077_35655 = null;
var count__35078_35656 = (0);
var i__35079_35657 = (0);
while(true){
if((i__35079_35657 < count__35078_35656)){
var child_struct_35659 = chunk__35077_35655.cljs$core$IIndexed$_nth$arity$2(null,i__35079_35657);
var children_35660 = shadow.dom.dom_node(child_struct_35659);
if(cljs.core.seq_QMARK_(children_35660)){
var seq__35126_35661 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35660));
var chunk__35128_35662 = null;
var count__35129_35663 = (0);
var i__35130_35664 = (0);
while(true){
if((i__35130_35664 < count__35129_35663)){
var child_35666 = chunk__35128_35662.cljs$core$IIndexed$_nth$arity$2(null,i__35130_35664);
if(cljs.core.truth_(child_35666)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35666);


var G__35667 = seq__35126_35661;
var G__35668 = chunk__35128_35662;
var G__35669 = count__35129_35663;
var G__35670 = (i__35130_35664 + (1));
seq__35126_35661 = G__35667;
chunk__35128_35662 = G__35668;
count__35129_35663 = G__35669;
i__35130_35664 = G__35670;
continue;
} else {
var G__35672 = seq__35126_35661;
var G__35673 = chunk__35128_35662;
var G__35674 = count__35129_35663;
var G__35675 = (i__35130_35664 + (1));
seq__35126_35661 = G__35672;
chunk__35128_35662 = G__35673;
count__35129_35663 = G__35674;
i__35130_35664 = G__35675;
continue;
}
} else {
var temp__5720__auto___35676 = cljs.core.seq(seq__35126_35661);
if(temp__5720__auto___35676){
var seq__35126_35677__$1 = temp__5720__auto___35676;
if(cljs.core.chunked_seq_QMARK_(seq__35126_35677__$1)){
var c__4550__auto___35679 = cljs.core.chunk_first(seq__35126_35677__$1);
var G__35680 = cljs.core.chunk_rest(seq__35126_35677__$1);
var G__35681 = c__4550__auto___35679;
var G__35682 = cljs.core.count(c__4550__auto___35679);
var G__35683 = (0);
seq__35126_35661 = G__35680;
chunk__35128_35662 = G__35681;
count__35129_35663 = G__35682;
i__35130_35664 = G__35683;
continue;
} else {
var child_35684 = cljs.core.first(seq__35126_35677__$1);
if(cljs.core.truth_(child_35684)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35684);


var G__35686 = cljs.core.next(seq__35126_35677__$1);
var G__35687 = null;
var G__35688 = (0);
var G__35689 = (0);
seq__35126_35661 = G__35686;
chunk__35128_35662 = G__35687;
count__35129_35663 = G__35688;
i__35130_35664 = G__35689;
continue;
} else {
var G__35692 = cljs.core.next(seq__35126_35677__$1);
var G__35693 = null;
var G__35694 = (0);
var G__35695 = (0);
seq__35126_35661 = G__35692;
chunk__35128_35662 = G__35693;
count__35129_35663 = G__35694;
i__35130_35664 = G__35695;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35660);
}


var G__35696 = seq__35076_35654;
var G__35697 = chunk__35077_35655;
var G__35698 = count__35078_35656;
var G__35699 = (i__35079_35657 + (1));
seq__35076_35654 = G__35696;
chunk__35077_35655 = G__35697;
count__35078_35656 = G__35698;
i__35079_35657 = G__35699;
continue;
} else {
var temp__5720__auto___35704 = cljs.core.seq(seq__35076_35654);
if(temp__5720__auto___35704){
var seq__35076_35706__$1 = temp__5720__auto___35704;
if(cljs.core.chunked_seq_QMARK_(seq__35076_35706__$1)){
var c__4550__auto___35707 = cljs.core.chunk_first(seq__35076_35706__$1);
var G__35708 = cljs.core.chunk_rest(seq__35076_35706__$1);
var G__35709 = c__4550__auto___35707;
var G__35710 = cljs.core.count(c__4550__auto___35707);
var G__35711 = (0);
seq__35076_35654 = G__35708;
chunk__35077_35655 = G__35709;
count__35078_35656 = G__35710;
i__35079_35657 = G__35711;
continue;
} else {
var child_struct_35712 = cljs.core.first(seq__35076_35706__$1);
var children_35713 = shadow.dom.dom_node(child_struct_35712);
if(cljs.core.seq_QMARK_(children_35713)){
var seq__35149_35715 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35713));
var chunk__35151_35716 = null;
var count__35152_35717 = (0);
var i__35153_35718 = (0);
while(true){
if((i__35153_35718 < count__35152_35717)){
var child_35721 = chunk__35151_35716.cljs$core$IIndexed$_nth$arity$2(null,i__35153_35718);
if(cljs.core.truth_(child_35721)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35721);


var G__35722 = seq__35149_35715;
var G__35723 = chunk__35151_35716;
var G__35724 = count__35152_35717;
var G__35725 = (i__35153_35718 + (1));
seq__35149_35715 = G__35722;
chunk__35151_35716 = G__35723;
count__35152_35717 = G__35724;
i__35153_35718 = G__35725;
continue;
} else {
var G__35728 = seq__35149_35715;
var G__35729 = chunk__35151_35716;
var G__35730 = count__35152_35717;
var G__35731 = (i__35153_35718 + (1));
seq__35149_35715 = G__35728;
chunk__35151_35716 = G__35729;
count__35152_35717 = G__35730;
i__35153_35718 = G__35731;
continue;
}
} else {
var temp__5720__auto___35733__$1 = cljs.core.seq(seq__35149_35715);
if(temp__5720__auto___35733__$1){
var seq__35149_35734__$1 = temp__5720__auto___35733__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35149_35734__$1)){
var c__4550__auto___35735 = cljs.core.chunk_first(seq__35149_35734__$1);
var G__35737 = cljs.core.chunk_rest(seq__35149_35734__$1);
var G__35738 = c__4550__auto___35735;
var G__35739 = cljs.core.count(c__4550__auto___35735);
var G__35740 = (0);
seq__35149_35715 = G__35737;
chunk__35151_35716 = G__35738;
count__35152_35717 = G__35739;
i__35153_35718 = G__35740;
continue;
} else {
var child_35744 = cljs.core.first(seq__35149_35734__$1);
if(cljs.core.truth_(child_35744)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35744);


var G__35746 = cljs.core.next(seq__35149_35734__$1);
var G__35747 = null;
var G__35748 = (0);
var G__35749 = (0);
seq__35149_35715 = G__35746;
chunk__35151_35716 = G__35747;
count__35152_35717 = G__35748;
i__35153_35718 = G__35749;
continue;
} else {
var G__35750 = cljs.core.next(seq__35149_35734__$1);
var G__35751 = null;
var G__35752 = (0);
var G__35753 = (0);
seq__35149_35715 = G__35750;
chunk__35151_35716 = G__35751;
count__35152_35717 = G__35752;
i__35153_35718 = G__35753;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35713);
}


var G__35755 = cljs.core.next(seq__35076_35706__$1);
var G__35756 = null;
var G__35757 = (0);
var G__35758 = (0);
seq__35076_35654 = G__35755;
chunk__35077_35655 = G__35756;
count__35078_35656 = G__35757;
i__35079_35657 = G__35758;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__35188 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__35188);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__35197 = cljs.core.seq(node);
var chunk__35198 = null;
var count__35199 = (0);
var i__35200 = (0);
while(true){
if((i__35200 < count__35199)){
var n = chunk__35198.cljs$core$IIndexed$_nth$arity$2(null,i__35200);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35767 = seq__35197;
var G__35768 = chunk__35198;
var G__35769 = count__35199;
var G__35770 = (i__35200 + (1));
seq__35197 = G__35767;
chunk__35198 = G__35768;
count__35199 = G__35769;
i__35200 = G__35770;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35197);
if(temp__5720__auto__){
var seq__35197__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35197__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35197__$1);
var G__35772 = cljs.core.chunk_rest(seq__35197__$1);
var G__35773 = c__4550__auto__;
var G__35774 = cljs.core.count(c__4550__auto__);
var G__35775 = (0);
seq__35197 = G__35772;
chunk__35198 = G__35773;
count__35199 = G__35774;
i__35200 = G__35775;
continue;
} else {
var n = cljs.core.first(seq__35197__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35776 = cljs.core.next(seq__35197__$1);
var G__35777 = null;
var G__35778 = (0);
var G__35779 = (0);
seq__35197 = G__35776;
chunk__35198 = G__35777;
count__35199 = G__35778;
i__35200 = G__35779;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__35207 = shadow.dom.dom_node(new$);
var G__35208 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__35207,G__35208);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__35211 = arguments.length;
switch (G__35211) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__35230 = arguments.length;
switch (G__35230) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__35238 = arguments.length;
switch (G__35238) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4131__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35800 = arguments.length;
var i__4731__auto___35802 = (0);
while(true){
if((i__4731__auto___35802 < len__4730__auto___35800)){
args__4736__auto__.push((arguments[i__4731__auto___35802]));

var G__35804 = (i__4731__auto___35802 + (1));
i__4731__auto___35802 = G__35804;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__35241_35809 = cljs.core.seq(nodes);
var chunk__35242_35810 = null;
var count__35243_35811 = (0);
var i__35244_35812 = (0);
while(true){
if((i__35244_35812 < count__35243_35811)){
var node_35813 = chunk__35242_35810.cljs$core$IIndexed$_nth$arity$2(null,i__35244_35812);
fragment.appendChild(shadow.dom._to_dom(node_35813));


var G__35815 = seq__35241_35809;
var G__35816 = chunk__35242_35810;
var G__35817 = count__35243_35811;
var G__35818 = (i__35244_35812 + (1));
seq__35241_35809 = G__35815;
chunk__35242_35810 = G__35816;
count__35243_35811 = G__35817;
i__35244_35812 = G__35818;
continue;
} else {
var temp__5720__auto___35819 = cljs.core.seq(seq__35241_35809);
if(temp__5720__auto___35819){
var seq__35241_35820__$1 = temp__5720__auto___35819;
if(cljs.core.chunked_seq_QMARK_(seq__35241_35820__$1)){
var c__4550__auto___35822 = cljs.core.chunk_first(seq__35241_35820__$1);
var G__35823 = cljs.core.chunk_rest(seq__35241_35820__$1);
var G__35824 = c__4550__auto___35822;
var G__35825 = cljs.core.count(c__4550__auto___35822);
var G__35826 = (0);
seq__35241_35809 = G__35823;
chunk__35242_35810 = G__35824;
count__35243_35811 = G__35825;
i__35244_35812 = G__35826;
continue;
} else {
var node_35827 = cljs.core.first(seq__35241_35820__$1);
fragment.appendChild(shadow.dom._to_dom(node_35827));


var G__35828 = cljs.core.next(seq__35241_35820__$1);
var G__35829 = null;
var G__35830 = (0);
var G__35831 = (0);
seq__35241_35809 = G__35828;
chunk__35242_35810 = G__35829;
count__35243_35811 = G__35830;
i__35244_35812 = G__35831;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq35240){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35240));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35251_35836 = cljs.core.seq(scripts);
var chunk__35252_35837 = null;
var count__35253_35838 = (0);
var i__35254_35839 = (0);
while(true){
if((i__35254_35839 < count__35253_35838)){
var vec__35261_35840 = chunk__35252_35837.cljs$core$IIndexed$_nth$arity$2(null,i__35254_35839);
var script_tag_35841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35261_35840,(0),null);
var script_body_35842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35261_35840,(1),null);
eval(script_body_35842);


var G__35844 = seq__35251_35836;
var G__35845 = chunk__35252_35837;
var G__35846 = count__35253_35838;
var G__35847 = (i__35254_35839 + (1));
seq__35251_35836 = G__35844;
chunk__35252_35837 = G__35845;
count__35253_35838 = G__35846;
i__35254_35839 = G__35847;
continue;
} else {
var temp__5720__auto___35849 = cljs.core.seq(seq__35251_35836);
if(temp__5720__auto___35849){
var seq__35251_35851__$1 = temp__5720__auto___35849;
if(cljs.core.chunked_seq_QMARK_(seq__35251_35851__$1)){
var c__4550__auto___35852 = cljs.core.chunk_first(seq__35251_35851__$1);
var G__35853 = cljs.core.chunk_rest(seq__35251_35851__$1);
var G__35854 = c__4550__auto___35852;
var G__35855 = cljs.core.count(c__4550__auto___35852);
var G__35856 = (0);
seq__35251_35836 = G__35853;
chunk__35252_35837 = G__35854;
count__35253_35838 = G__35855;
i__35254_35839 = G__35856;
continue;
} else {
var vec__35267_35858 = cljs.core.first(seq__35251_35851__$1);
var script_tag_35859 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35267_35858,(0),null);
var script_body_35860 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35267_35858,(1),null);
eval(script_body_35860);


var G__35863 = cljs.core.next(seq__35251_35851__$1);
var G__35864 = null;
var G__35865 = (0);
var G__35866 = (0);
seq__35251_35836 = G__35863;
chunk__35252_35837 = G__35864;
count__35253_35838 = G__35865;
i__35254_35839 = G__35866;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__35273){
var vec__35274 = p__35273;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35274,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35274,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__35277 = shadow.dom.dom_node(el);
var G__35278 = cls;
return goog.dom.getAncestorByClass(G__35277,G__35278);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__35280 = arguments.length;
switch (G__35280) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__35283 = shadow.dom.dom_node(el);
var G__35284 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__35283,G__35284);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__35287 = shadow.dom.dom_node(el);
var G__35288 = cljs.core.name(tag);
var G__35289 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__35287,G__35288,G__35289);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__35290 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__35290);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__35292 = shadow.dom.dom_node(dom);
var G__35293 = value;
return goog.dom.forms.setValue(G__35292,G__35293);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__35302 = cljs.core.seq(style_keys);
var chunk__35303 = null;
var count__35304 = (0);
var i__35305 = (0);
while(true){
if((i__35305 < count__35304)){
var it = chunk__35303.cljs$core$IIndexed$_nth$arity$2(null,i__35305);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35881 = seq__35302;
var G__35882 = chunk__35303;
var G__35883 = count__35304;
var G__35884 = (i__35305 + (1));
seq__35302 = G__35881;
chunk__35303 = G__35882;
count__35304 = G__35883;
i__35305 = G__35884;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35302);
if(temp__5720__auto__){
var seq__35302__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35302__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35302__$1);
var G__35886 = cljs.core.chunk_rest(seq__35302__$1);
var G__35887 = c__4550__auto__;
var G__35888 = cljs.core.count(c__4550__auto__);
var G__35889 = (0);
seq__35302 = G__35886;
chunk__35303 = G__35887;
count__35304 = G__35888;
i__35305 = G__35889;
continue;
} else {
var it = cljs.core.first(seq__35302__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35890 = cljs.core.next(seq__35302__$1);
var G__35891 = null;
var G__35892 = (0);
var G__35893 = (0);
seq__35302 = G__35890;
chunk__35303 = G__35891;
count__35304 = G__35892;
i__35305 = G__35893;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k35313,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__35322 = k35313;
var G__35322__$1 = (((G__35322 instanceof cljs.core.Keyword))?G__35322.fqn:null);
switch (G__35322__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35313,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__35326){
var vec__35327 = p__35326;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35327,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35327,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35312){
var self__ = this;
var G__35312__$1 = this;
return (new cljs.core.RecordIter((0),G__35312__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__35341 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__35341(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35314,other35315){
var self__ = this;
var this35314__$1 = this;
return (((!((other35315 == null)))) && ((this35314__$1.constructor === other35315.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35314__$1.x,other35315.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35314__$1.y,other35315.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35314__$1.__extmap,other35315.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__35312){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__35350 = cljs.core.keyword_identical_QMARK_;
var expr__35351 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__35353 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__35354 = expr__35351;
return (pred__35350.cljs$core$IFn$_invoke$arity$2 ? pred__35350.cljs$core$IFn$_invoke$arity$2(G__35353,G__35354) : pred__35350.call(null,G__35353,G__35354));
})())){
return (new shadow.dom.Coordinate(G__35312,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35356 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__35357 = expr__35351;
return (pred__35350.cljs$core$IFn$_invoke$arity$2 ? pred__35350.cljs$core$IFn$_invoke$arity$2(G__35356,G__35357) : pred__35350.call(null,G__35356,G__35357));
})())){
return (new shadow.dom.Coordinate(self__.x,G__35312,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__35312),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__35312){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35312,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35317){
var extmap__4424__auto__ = (function (){var G__35363 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35317,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35317)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35363);
} else {
return G__35363;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35317),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35317),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__35366 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__35366);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__35367 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__35367);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__35368 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__35368);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k35370,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__35374 = k35370;
var G__35374__$1 = (((G__35374 instanceof cljs.core.Keyword))?G__35374.fqn:null);
switch (G__35374__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35370,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__35376){
var vec__35377 = p__35376;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35377,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35377,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Size{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35369){
var self__ = this;
var G__35369__$1 = this;
return (new cljs.core.RecordIter((0),G__35369__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__35381 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__35381(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35371,other35372){
var self__ = this;
var this35371__$1 = this;
return (((!((other35372 == null)))) && ((this35371__$1.constructor === other35372.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35371__$1.w,other35372.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35371__$1.h,other35372.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35371__$1.__extmap,other35372.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__35369){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__35386 = cljs.core.keyword_identical_QMARK_;
var expr__35387 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__35390 = new cljs.core.Keyword(null,"w","w",354169001);
var G__35391 = expr__35387;
return (pred__35386.cljs$core$IFn$_invoke$arity$2 ? pred__35386.cljs$core$IFn$_invoke$arity$2(G__35390,G__35391) : pred__35386.call(null,G__35390,G__35391));
})())){
return (new shadow.dom.Size(G__35369,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35392 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__35393 = expr__35387;
return (pred__35386.cljs$core$IFn$_invoke$arity$2 ? pred__35386.cljs$core$IFn$_invoke$arity$2(G__35392,G__35393) : pred__35386.call(null,G__35392,G__35393));
})())){
return (new shadow.dom.Size(self__.w,G__35369,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__35369),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__35369){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35369,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35373){
var extmap__4424__auto__ = (function (){var G__35399 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35373,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35373)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35399);
} else {
return G__35399;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35373),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35373),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__35406 = shadow.dom.dom_node(el);
return goog.style.getSize(G__35406);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__35939 = (i + (1));
var G__35940 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__35939;
ret = G__35940;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35424){
var vec__35425 = p__35424;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35425,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35425,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35432 = arguments.length;
switch (G__35432) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__35438_35948 = new_node;
var G__35439_35949 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__35438_35948,G__35439_35949);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__35441_35952 = new_node;
var G__35442_35953 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__35441_35952,G__35442_35953);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5718__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5718__auto__)){
var child = temp__5718__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__35954 = ps;
var G__35955 = (i + (1));
el__$1 = G__35954;
i = G__35955;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__35449 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__35449);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__35452 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__35452);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__35455 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__35455);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__35462 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35462,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35462,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35462,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35465_35968 = cljs.core.seq(props);
var chunk__35466_35969 = null;
var count__35467_35970 = (0);
var i__35468_35971 = (0);
while(true){
if((i__35468_35971 < count__35467_35970)){
var vec__35476_35972 = chunk__35466_35969.cljs$core$IIndexed$_nth$arity$2(null,i__35468_35971);
var k_35973 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35476_35972,(0),null);
var v_35974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35476_35972,(1),null);
el.setAttributeNS((function (){var temp__5720__auto__ = cljs.core.namespace(k_35973);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35973),v_35974);


var G__35976 = seq__35465_35968;
var G__35977 = chunk__35466_35969;
var G__35978 = count__35467_35970;
var G__35979 = (i__35468_35971 + (1));
seq__35465_35968 = G__35976;
chunk__35466_35969 = G__35977;
count__35467_35970 = G__35978;
i__35468_35971 = G__35979;
continue;
} else {
var temp__5720__auto___35980 = cljs.core.seq(seq__35465_35968);
if(temp__5720__auto___35980){
var seq__35465_35981__$1 = temp__5720__auto___35980;
if(cljs.core.chunked_seq_QMARK_(seq__35465_35981__$1)){
var c__4550__auto___35982 = cljs.core.chunk_first(seq__35465_35981__$1);
var G__35983 = cljs.core.chunk_rest(seq__35465_35981__$1);
var G__35984 = c__4550__auto___35982;
var G__35985 = cljs.core.count(c__4550__auto___35982);
var G__35986 = (0);
seq__35465_35968 = G__35983;
chunk__35466_35969 = G__35984;
count__35467_35970 = G__35985;
i__35468_35971 = G__35986;
continue;
} else {
var vec__35479_35987 = cljs.core.first(seq__35465_35981__$1);
var k_35988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35479_35987,(0),null);
var v_35989 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35479_35987,(1),null);
el.setAttributeNS((function (){var temp__5720__auto____$1 = cljs.core.namespace(k_35988);
if(cljs.core.truth_(temp__5720__auto____$1)){
var ns = temp__5720__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35988),v_35989);


var G__35992 = cljs.core.next(seq__35465_35981__$1);
var G__35993 = null;
var G__35994 = (0);
var G__35995 = (0);
seq__35465_35968 = G__35992;
chunk__35466_35969 = G__35993;
count__35467_35970 = G__35994;
i__35468_35971 = G__35995;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__35483 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35483,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35483,(1),null);
var seq__35486_35999 = cljs.core.seq(node_children);
var chunk__35488_36000 = null;
var count__35489_36001 = (0);
var i__35490_36002 = (0);
while(true){
if((i__35490_36002 < count__35489_36001)){
var child_struct_36003 = chunk__35488_36000.cljs$core$IIndexed$_nth$arity$2(null,i__35490_36002);
if((!((child_struct_36003 == null)))){
if(typeof child_struct_36003 === 'string'){
var text_36004 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36004),child_struct_36003].join(''));
} else {
var children_36005 = shadow.dom.svg_node(child_struct_36003);
if(cljs.core.seq_QMARK_(children_36005)){
var seq__35505_36006 = cljs.core.seq(children_36005);
var chunk__35507_36007 = null;
var count__35508_36008 = (0);
var i__35509_36009 = (0);
while(true){
if((i__35509_36009 < count__35508_36008)){
var child_36010 = chunk__35507_36007.cljs$core$IIndexed$_nth$arity$2(null,i__35509_36009);
if(cljs.core.truth_(child_36010)){
node.appendChild(child_36010);


var G__36011 = seq__35505_36006;
var G__36012 = chunk__35507_36007;
var G__36013 = count__35508_36008;
var G__36014 = (i__35509_36009 + (1));
seq__35505_36006 = G__36011;
chunk__35507_36007 = G__36012;
count__35508_36008 = G__36013;
i__35509_36009 = G__36014;
continue;
} else {
var G__36015 = seq__35505_36006;
var G__36016 = chunk__35507_36007;
var G__36017 = count__35508_36008;
var G__36018 = (i__35509_36009 + (1));
seq__35505_36006 = G__36015;
chunk__35507_36007 = G__36016;
count__35508_36008 = G__36017;
i__35509_36009 = G__36018;
continue;
}
} else {
var temp__5720__auto___36019 = cljs.core.seq(seq__35505_36006);
if(temp__5720__auto___36019){
var seq__35505_36020__$1 = temp__5720__auto___36019;
if(cljs.core.chunked_seq_QMARK_(seq__35505_36020__$1)){
var c__4550__auto___36021 = cljs.core.chunk_first(seq__35505_36020__$1);
var G__36022 = cljs.core.chunk_rest(seq__35505_36020__$1);
var G__36023 = c__4550__auto___36021;
var G__36024 = cljs.core.count(c__4550__auto___36021);
var G__36025 = (0);
seq__35505_36006 = G__36022;
chunk__35507_36007 = G__36023;
count__35508_36008 = G__36024;
i__35509_36009 = G__36025;
continue;
} else {
var child_36026 = cljs.core.first(seq__35505_36020__$1);
if(cljs.core.truth_(child_36026)){
node.appendChild(child_36026);


var G__36027 = cljs.core.next(seq__35505_36020__$1);
var G__36028 = null;
var G__36029 = (0);
var G__36030 = (0);
seq__35505_36006 = G__36027;
chunk__35507_36007 = G__36028;
count__35508_36008 = G__36029;
i__35509_36009 = G__36030;
continue;
} else {
var G__36031 = cljs.core.next(seq__35505_36020__$1);
var G__36032 = null;
var G__36033 = (0);
var G__36034 = (0);
seq__35505_36006 = G__36031;
chunk__35507_36007 = G__36032;
count__35508_36008 = G__36033;
i__35509_36009 = G__36034;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36005);
}
}


var G__36035 = seq__35486_35999;
var G__36036 = chunk__35488_36000;
var G__36037 = count__35489_36001;
var G__36038 = (i__35490_36002 + (1));
seq__35486_35999 = G__36035;
chunk__35488_36000 = G__36036;
count__35489_36001 = G__36037;
i__35490_36002 = G__36038;
continue;
} else {
var G__36039 = seq__35486_35999;
var G__36040 = chunk__35488_36000;
var G__36041 = count__35489_36001;
var G__36042 = (i__35490_36002 + (1));
seq__35486_35999 = G__36039;
chunk__35488_36000 = G__36040;
count__35489_36001 = G__36041;
i__35490_36002 = G__36042;
continue;
}
} else {
var temp__5720__auto___36043 = cljs.core.seq(seq__35486_35999);
if(temp__5720__auto___36043){
var seq__35486_36044__$1 = temp__5720__auto___36043;
if(cljs.core.chunked_seq_QMARK_(seq__35486_36044__$1)){
var c__4550__auto___36045 = cljs.core.chunk_first(seq__35486_36044__$1);
var G__36046 = cljs.core.chunk_rest(seq__35486_36044__$1);
var G__36047 = c__4550__auto___36045;
var G__36048 = cljs.core.count(c__4550__auto___36045);
var G__36049 = (0);
seq__35486_35999 = G__36046;
chunk__35488_36000 = G__36047;
count__35489_36001 = G__36048;
i__35490_36002 = G__36049;
continue;
} else {
var child_struct_36050 = cljs.core.first(seq__35486_36044__$1);
if((!((child_struct_36050 == null)))){
if(typeof child_struct_36050 === 'string'){
var text_36054 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36054),child_struct_36050].join(''));
} else {
var children_36055 = shadow.dom.svg_node(child_struct_36050);
if(cljs.core.seq_QMARK_(children_36055)){
var seq__35511_36056 = cljs.core.seq(children_36055);
var chunk__35513_36057 = null;
var count__35514_36058 = (0);
var i__35515_36059 = (0);
while(true){
if((i__35515_36059 < count__35514_36058)){
var child_36060 = chunk__35513_36057.cljs$core$IIndexed$_nth$arity$2(null,i__35515_36059);
if(cljs.core.truth_(child_36060)){
node.appendChild(child_36060);


var G__36061 = seq__35511_36056;
var G__36062 = chunk__35513_36057;
var G__36063 = count__35514_36058;
var G__36064 = (i__35515_36059 + (1));
seq__35511_36056 = G__36061;
chunk__35513_36057 = G__36062;
count__35514_36058 = G__36063;
i__35515_36059 = G__36064;
continue;
} else {
var G__36065 = seq__35511_36056;
var G__36066 = chunk__35513_36057;
var G__36067 = count__35514_36058;
var G__36068 = (i__35515_36059 + (1));
seq__35511_36056 = G__36065;
chunk__35513_36057 = G__36066;
count__35514_36058 = G__36067;
i__35515_36059 = G__36068;
continue;
}
} else {
var temp__5720__auto___36069__$1 = cljs.core.seq(seq__35511_36056);
if(temp__5720__auto___36069__$1){
var seq__35511_36070__$1 = temp__5720__auto___36069__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35511_36070__$1)){
var c__4550__auto___36071 = cljs.core.chunk_first(seq__35511_36070__$1);
var G__36072 = cljs.core.chunk_rest(seq__35511_36070__$1);
var G__36073 = c__4550__auto___36071;
var G__36074 = cljs.core.count(c__4550__auto___36071);
var G__36075 = (0);
seq__35511_36056 = G__36072;
chunk__35513_36057 = G__36073;
count__35514_36058 = G__36074;
i__35515_36059 = G__36075;
continue;
} else {
var child_36076 = cljs.core.first(seq__35511_36070__$1);
if(cljs.core.truth_(child_36076)){
node.appendChild(child_36076);


var G__36080 = cljs.core.next(seq__35511_36070__$1);
var G__36081 = null;
var G__36082 = (0);
var G__36083 = (0);
seq__35511_36056 = G__36080;
chunk__35513_36057 = G__36081;
count__35514_36058 = G__36082;
i__35515_36059 = G__36083;
continue;
} else {
var G__36084 = cljs.core.next(seq__35511_36070__$1);
var G__36085 = null;
var G__36086 = (0);
var G__36087 = (0);
seq__35511_36056 = G__36084;
chunk__35513_36057 = G__36085;
count__35514_36058 = G__36086;
i__35515_36059 = G__36087;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36055);
}
}


var G__36088 = cljs.core.next(seq__35486_36044__$1);
var G__36089 = null;
var G__36090 = (0);
var G__36091 = (0);
seq__35486_35999 = G__36088;
chunk__35488_36000 = G__36089;
count__35489_36001 = G__36090;
i__35490_36002 = G__36091;
continue;
} else {
var G__36092 = cljs.core.next(seq__35486_36044__$1);
var G__36093 = null;
var G__36094 = (0);
var G__36095 = (0);
seq__35486_35999 = G__36092;
chunk__35488_36000 = G__36093;
count__35489_36001 = G__36094;
i__35490_36002 = G__36095;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__35517_36096 = shadow.dom._to_svg;
var G__35518_36097 = "string";
var G__35519_36098 = ((function (G__35517_36096,G__35518_36097){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__35517_36096,G__35518_36097))
;
goog.object.set(G__35517_36096,G__35518_36097,G__35519_36098);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__35520_36103 = shadow.dom._to_svg;
var G__35521_36104 = "null";
var G__35522_36105 = ((function (G__35520_36103,G__35521_36104){
return (function (_){
return null;
});})(G__35520_36103,G__35521_36104))
;
goog.object.set(G__35520_36103,G__35521_36104,G__35522_36105);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36106 = arguments.length;
var i__4731__auto___36107 = (0);
while(true){
if((i__4731__auto___36107 < len__4730__auto___36106)){
args__4736__auto__.push((arguments[i__4731__auto___36107]));

var G__36108 = (i__4731__auto___36107 + (1));
i__4731__auto___36107 = G__36108;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq35523){
var G__35524 = cljs.core.first(seq35523);
var seq35523__$1 = cljs.core.next(seq35523);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35524,seq35523__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__35526 = arguments.length;
switch (G__35526) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__35527_36110 = shadow.dom.dom_node(el);
var G__35528_36111 = cljs.core.name(event);
var G__35529_36112 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35527_36110,G__35528_36111,G__35529_36112) : shadow.dom.dom_listen.call(null,G__35527_36110,G__35528_36111,G__35529_36112));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__33200__auto___36115 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33200__auto___36115,buf,chan,event_fn){
return (function (){
var f__33201__auto__ = (function (){var switch__33021__auto__ = ((function (c__33200__auto___36115,buf,chan,event_fn){
return (function (state_35536){
var state_val_35537 = (state_35536[(1)]);
if((state_val_35537 === (1))){
var state_35536__$1 = state_35536;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35536__$1,(2),once_or_cleanup);
} else {
if((state_val_35537 === (2))){
var inst_35533 = (state_35536[(2)]);
var inst_35534 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_35536__$1 = (function (){var statearr_35543 = state_35536;
(statearr_35543[(7)] = inst_35533);

return statearr_35543;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35536__$1,inst_35534);
} else {
return null;
}
}
});})(c__33200__auto___36115,buf,chan,event_fn))
;
return ((function (switch__33021__auto__,c__33200__auto___36115,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__33022__auto__ = null;
var shadow$dom$state_machine__33022__auto____0 = (function (){
var statearr_35544 = [null,null,null,null,null,null,null,null];
(statearr_35544[(0)] = shadow$dom$state_machine__33022__auto__);

(statearr_35544[(1)] = (1));

return statearr_35544;
});
var shadow$dom$state_machine__33022__auto____1 = (function (state_35536){
while(true){
var ret_value__33023__auto__ = (function (){try{while(true){
var result__33024__auto__ = switch__33021__auto__(state_35536);
if(cljs.core.keyword_identical_QMARK_(result__33024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33024__auto__;
}
break;
}
}catch (e35547){if((e35547 instanceof Object)){
var ex__33025__auto__ = e35547;
var statearr_35548_36116 = state_35536;
(statearr_35548_36116[(5)] = ex__33025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35547;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36117 = state_35536;
state_35536 = G__36117;
continue;
} else {
return ret_value__33023__auto__;
}
break;
}
});
shadow$dom$state_machine__33022__auto__ = function(state_35536){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33022__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33022__auto____1.call(this,state_35536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__33022__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33022__auto____0;
shadow$dom$state_machine__33022__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33022__auto____1;
return shadow$dom$state_machine__33022__auto__;
})()
;})(switch__33021__auto__,c__33200__auto___36115,buf,chan,event_fn))
})();
var state__33202__auto__ = (function (){var statearr_35550 = (f__33201__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33201__auto__.cljs$core$IFn$_invoke$arity$0() : f__33201__auto__.call(null));
(statearr_35550[(6)] = c__33200__auto___36115);

return statearr_35550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33202__auto__);
});})(c__33200__auto___36115,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
