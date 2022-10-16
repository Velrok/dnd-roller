goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33258 = arguments.length;
switch (G__33258) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33259 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33259 = (function (f,blockable,meta33260){
this.f = f;
this.blockable = blockable;
this.meta33260 = meta33260;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33261,meta33260__$1){
var self__ = this;
var _33261__$1 = this;
return (new cljs.core.async.t_cljs$core$async33259(self__.f,self__.blockable,meta33260__$1));
});

cljs.core.async.t_cljs$core$async33259.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33261){
var self__ = this;
var _33261__$1 = this;
return self__.meta33260;
});

cljs.core.async.t_cljs$core$async33259.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33259.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33259.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async33259.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async33259.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33260","meta33260",1606032625,null)], null);
});

cljs.core.async.t_cljs$core$async33259.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33259.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33259";

cljs.core.async.t_cljs$core$async33259.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33259");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33259.
 */
cljs.core.async.__GT_t_cljs$core$async33259 = (function cljs$core$async$__GT_t_cljs$core$async33259(f__$1,blockable__$1,meta33260){
return (new cljs.core.async.t_cljs$core$async33259(f__$1,blockable__$1,meta33260));
});

}

return (new cljs.core.async.t_cljs$core$async33259(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__33264 = arguments.length;
switch (G__33264) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33266 = arguments.length;
switch (G__33266) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__33268 = arguments.length;
switch (G__33268) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_34698 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34698) : fn1.call(null,val_34698));
} else {
cljs.core.async.impl.dispatch.run(((function (val_34698,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34698) : fn1.call(null,val_34698));
});})(val_34698,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__33270 = arguments.length;
switch (G__33270) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5718__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___34700 = n;
var x_34701 = (0);
while(true){
if((x_34701 < n__4607__auto___34700)){
(a[x_34701] = (0));

var G__34702 = (x_34701 + (1));
x_34701 = G__34702;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__34703 = (i + (1));
i = G__34703;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33271 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33271 = (function (flag,meta33272){
this.flag = flag;
this.meta33272 = meta33272;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33273,meta33272__$1){
var self__ = this;
var _33273__$1 = this;
return (new cljs.core.async.t_cljs$core$async33271(self__.flag,meta33272__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async33271.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33273){
var self__ = this;
var _33273__$1 = this;
return self__.meta33272;
});})(flag))
;

cljs.core.async.t_cljs$core$async33271.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33271.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async33271.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33271.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33271.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33272","meta33272",1185083518,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async33271.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33271.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33271";

cljs.core.async.t_cljs$core$async33271.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33271");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33271.
 */
cljs.core.async.__GT_t_cljs$core$async33271 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33271(flag__$1,meta33272){
return (new cljs.core.async.t_cljs$core$async33271(flag__$1,meta33272));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async33271(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33274 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33274 = (function (flag,cb,meta33275){
this.flag = flag;
this.cb = cb;
this.meta33275 = meta33275;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33274.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33276,meta33275__$1){
var self__ = this;
var _33276__$1 = this;
return (new cljs.core.async.t_cljs$core$async33274(self__.flag,self__.cb,meta33275__$1));
});

cljs.core.async.t_cljs$core$async33274.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33276){
var self__ = this;
var _33276__$1 = this;
return self__.meta33275;
});

cljs.core.async.t_cljs$core$async33274.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33274.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async33274.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33274.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async33274.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33275","meta33275",1787861320,null)], null);
});

cljs.core.async.t_cljs$core$async33274.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33274.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33274";

cljs.core.async.t_cljs$core$async33274.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33274");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33274.
 */
cljs.core.async.__GT_t_cljs$core$async33274 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33274(flag__$1,cb__$1,meta33275){
return (new cljs.core.async.t_cljs$core$async33274(flag__$1,cb__$1,meta33275));
});

}

return (new cljs.core.async.t_cljs$core$async33274(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33277_SHARP_){
var G__33279 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33277_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33279) : fret.call(null,G__33279));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33278_SHARP_){
var G__33280 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33278_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33280) : fret.call(null,G__33280));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34710 = (i + (1));
i = G__34710;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34711 = arguments.length;
var i__4731__auto___34713 = (0);
while(true){
if((i__4731__auto___34713 < len__4730__auto___34711)){
args__4736__auto__.push((arguments[i__4731__auto___34713]));

var G__34715 = (i__4731__auto___34713 + (1));
i__4731__auto___34713 = G__34715;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33283){
var map__33284 = p__33283;
var map__33284__$1 = (((((!((map__33284 == null))))?(((((map__33284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33284):map__33284);
var opts = map__33284__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33281){
var G__33282 = cljs.core.first(seq33281);
var seq33281__$1 = cljs.core.next(seq33281);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33282,seq33281__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__33287 = arguments.length;
switch (G__33287) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33200__auto___34724 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33200__auto___34724){
return (function (){
var f__33201__auto__ = (function (){var switch__33021__auto__ = ((function (c__33200__auto___34724){
return (function (state_33311){
var state_val_33312 = (state_33311[(1)]);
if((state_val_33312 === (7))){
var inst_33307 = (state_33311[(2)]);
var state_33311__$1 = state_33311;
var statearr_33313_34727 = state_33311__$1;
(statearr_33313_34727[(2)] = inst_33307);

(statearr_33313_34727[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33312 === (1))){
var state_33311__$1 = state_33311;
var statearr_33314_34729 = state_33311__$1;
(statearr_33314_34729[(2)] = null);

(statearr_33314_34729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33312 === (4))){
var inst_33290 = (state_33311[(7)]);
var inst_33290__$1 = (state_33311[(2)]);
var inst_33291 = (inst_33290__$1 == null);
var state_33311__$1 = (function (){var statearr_33315 = state_33311;
(statearr_33315[(7)] = inst_33290__$1);

return statearr_33315;
})();
if(cljs.core.truth_(inst_33291)){
var statearr_33316_34731 = state_33311__$1;
(statearr_33316_34731[(1)] = (5));

} else {
var statearr_33317_34732 = state_33311__$1;
(statearr_33317_34732[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33312 === (13))){
var state_33311__$1 = state_33311;
var statearr_33318_34733 = state_33311__$1;
(statearr_33318_34733[(2)] = null);

(statearr_33318_34733[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33312 === (6))){
var inst_33290 = (state_33311[(7)]);
var state_33311__$1 = state_33311;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33311__$1,(11),to,inst_33290);
} else {
if((state_val_33312 === (3))){
var inst_33309 = (state_33311[(2)]);
var state_33311__$1 = state_33311;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33311__$1,inst_33309);
} else {
if((state_val_33312 === (12))){
var state_33311__$1 = state_33311;
var statearr_33319_34740 = state_33311__$1;
(statearr_33319_34740[(2)] = null);

(statearr_33319_34740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33312 === (2))){
var state_33311__$1 = state_33311;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33311__$1,(4),from);
} else {
if((state_val_33312 === (11))){
var inst_33300 = (state_33311[(2)]);
var state_33311__$1 = state_33311;
if(cljs.core.truth_(inst_33300)){
var statearr_33320_34742 = state_33311__$1;
(statearr_33320_34742[(1)] = (12));

} else {
var statearr_33321_34743 = state_33311__$1;
(statearr_33321_34743[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33312 === (9))){
var state_33311__$1 = state_33311;
var statearr_33322_34746 = state_33311__$1;
(statearr_33322_34746[(2)] = null);

(statearr_33322_34746[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33312 === (5))){
var state_33311__$1 = state_33311;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33323_34749 = state_33311__$1;
(statearr_33323_34749[(1)] = (8));

} else {
var statearr_33324_34750 = state_33311__$1;
(statearr_33324_34750[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33312 === (14))){
var inst_33305 = (state_33311[(2)]);
var state_33311__$1 = state_33311;
var statearr_33325_34753 = state_33311__$1;
(statearr_33325_34753[(2)] = inst_33305);

(statearr_33325_34753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33312 === (10))){
var inst_33297 = (state_33311[(2)]);
var state_33311__$1 = state_33311;
var statearr_33326_34754 = state_33311__$1;
(statearr_33326_34754[(2)] = inst_33297);

(statearr_33326_34754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33312 === (8))){
var inst_33294 = cljs.core.async.close_BANG_(to);
var state_33311__$1 = state_33311;
var statearr_33327_34756 = state_33311__$1;
(statearr_33327_34756[(2)] = inst_33294);

(statearr_33327_34756[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33200__auto___34724))
;
return ((function (switch__33021__auto__,c__33200__auto___34724){
return (function() {
var cljs$core$async$state_machine__33022__auto__ = null;
var cljs$core$async$state_machine__33022__auto____0 = (function (){
var statearr_33328 = [null,null,null,null,null,null,null,null];
(statearr_33328[(0)] = cljs$core$async$state_machine__33022__auto__);

(statearr_33328[(1)] = (1));

return statearr_33328;
});
var cljs$core$async$state_machine__33022__auto____1 = (function (state_33311){
while(true){
var ret_value__33023__auto__ = (function (){try{while(true){
var result__33024__auto__ = switch__33021__auto__(state_33311);
if(cljs.core.keyword_identical_QMARK_(result__33024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33024__auto__;
}
break;
}
}catch (e33329){if((e33329 instanceof Object)){
var ex__33025__auto__ = e33329;
var statearr_33330_34761 = state_33311;
(statearr_33330_34761[(5)] = ex__33025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33311);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33329;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34763 = state_33311;
state_33311 = G__34763;
continue;
} else {
return ret_value__33023__auto__;
}
break;
}
});
cljs$core$async$state_machine__33022__auto__ = function(state_33311){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33022__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33022__auto____1.call(this,state_33311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33022__auto____0;
cljs$core$async$state_machine__33022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33022__auto____1;
return cljs$core$async$state_machine__33022__auto__;
})()
;})(switch__33021__auto__,c__33200__auto___34724))
})();
var state__33202__auto__ = (function (){var statearr_33331 = (f__33201__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33201__auto__.cljs$core$IFn$_invoke$arity$0() : f__33201__auto__.call(null));
(statearr_33331[(6)] = c__33200__auto___34724);

return statearr_33331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33202__auto__);
});})(c__33200__auto___34724))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__33332){
var vec__33333 = p__33332;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33333,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33333,(1),null);
var job = vec__33333;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33200__auto___34769 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33200__auto___34769,res,vec__33333,v,p,job,jobs,results){
return (function (){
var f__33201__auto__ = (function (){var switch__33021__auto__ = ((function (c__33200__auto___34769,res,vec__33333,v,p,job,jobs,results){
return (function (state_33340){
var state_val_33341 = (state_33340[(1)]);
if((state_val_33341 === (1))){
var state_33340__$1 = state_33340;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33340__$1,(2),res,v);
} else {
if((state_val_33341 === (2))){
var inst_33337 = (state_33340[(2)]);
var inst_33338 = cljs.core.async.close_BANG_(res);
var state_33340__$1 = (function (){var statearr_33342 = state_33340;
(statearr_33342[(7)] = inst_33337);

return statearr_33342;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33340__$1,inst_33338);
} else {
return null;
}
}
});})(c__33200__auto___34769,res,vec__33333,v,p,job,jobs,results))
;
return ((function (switch__33021__auto__,c__33200__auto___34769,res,vec__33333,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33022__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33022__auto____0 = (function (){
var statearr_33343 = [null,null,null,null,null,null,null,null];
(statearr_33343[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33022__auto__);

(statearr_33343[(1)] = (1));

return statearr_33343;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33022__auto____1 = (function (state_33340){
while(true){
var ret_value__33023__auto__ = (function (){try{while(true){
var result__33024__auto__ = switch__33021__auto__(state_33340);
if(cljs.core.keyword_identical_QMARK_(result__33024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33024__auto__;
}
break;
}
}catch (e33344){if((e33344 instanceof Object)){
var ex__33025__auto__ = e33344;
var statearr_33345_34778 = state_33340;
(statearr_33345_34778[(5)] = ex__33025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33344;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34781 = state_33340;
state_33340 = G__34781;
continue;
} else {
return ret_value__33023__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33022__auto__ = function(state_33340){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33022__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33022__auto____1.call(this,state_33340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33022__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33022__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33022__auto__;
})()
;})(switch__33021__auto__,c__33200__auto___34769,res,vec__33333,v,p,job,jobs,results))
})();
var state__33202__auto__ = (function (){var statearr_33346 = (f__33201__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33201__auto__.cljs$core$IFn$_invoke$arity$0() : f__33201__auto__.call(null));
(statearr_33346[(6)] = c__33200__auto___34769);

return statearr_33346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33202__auto__);
});})(c__33200__auto___34769,res,vec__33333,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__33347){
var vec__33348 = p__33347;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33348,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33348,(1),null);
var job = vec__33348;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___34784 = n;
var __34785 = (0);
while(true){
if((__34785 < n__4607__auto___34784)){
var G__33351_34786 = type;
var G__33351_34787__$1 = (((G__33351_34786 instanceof cljs.core.Keyword))?G__33351_34786.fqn:null);
switch (G__33351_34787__$1) {
case "compute":
var c__33200__auto___34789 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34785,c__33200__auto___34789,G__33351_34786,G__33351_34787__$1,n__4607__auto___34784,jobs,results,process,async){
return (function (){
var f__33201__auto__ = (function (){var switch__33021__auto__ = ((function (__34785,c__33200__auto___34789,G__33351_34786,G__33351_34787__$1,n__4607__auto___34784,jobs,results,process,async){
return (function (state_33364){
var state_val_33365 = (state_33364[(1)]);
if((state_val_33365 === (1))){
var state_33364__$1 = state_33364;
var statearr_33366_34793 = state_33364__$1;
(statearr_33366_34793[(2)] = null);

(statearr_33366_34793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (2))){
var state_33364__$1 = state_33364;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33364__$1,(4),jobs);
} else {
if((state_val_33365 === (3))){
var inst_33362 = (state_33364[(2)]);
var state_33364__$1 = state_33364;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33364__$1,inst_33362);
} else {
if((state_val_33365 === (4))){
var inst_33354 = (state_33364[(2)]);
var inst_33355 = process(inst_33354);
var state_33364__$1 = state_33364;
if(cljs.core.truth_(inst_33355)){
var statearr_33367_34797 = state_33364__$1;
(statearr_33367_34797[(1)] = (5));

} else {
var statearr_33368_34799 = state_33364__$1;
(statearr_33368_34799[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (5))){
var state_33364__$1 = state_33364;
var statearr_33369_34801 = state_33364__$1;
(statearr_33369_34801[(2)] = null);

(statearr_33369_34801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (6))){
var state_33364__$1 = state_33364;
var statearr_33370_34802 = state_33364__$1;
(statearr_33370_34802[(2)] = null);

(statearr_33370_34802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (7))){
var inst_33360 = (state_33364[(2)]);
var state_33364__$1 = state_33364;
var statearr_33371_34803 = state_33364__$1;
(statearr_33371_34803[(2)] = inst_33360);

(statearr_33371_34803[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34785,c__33200__auto___34789,G__33351_34786,G__33351_34787__$1,n__4607__auto___34784,jobs,results,process,async))
;
return ((function (__34785,switch__33021__auto__,c__33200__auto___34789,G__33351_34786,G__33351_34787__$1,n__4607__auto___34784,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33022__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33022__auto____0 = (function (){
var statearr_33372 = [null,null,null,null,null,null,null];
(statearr_33372[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33022__auto__);

(statearr_33372[(1)] = (1));

return statearr_33372;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33022__auto____1 = (function (state_33364){
while(true){
var ret_value__33023__auto__ = (function (){try{while(true){
var result__33024__auto__ = switch__33021__auto__(state_33364);
if(cljs.core.keyword_identical_QMARK_(result__33024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33024__auto__;
}
break;
}
}catch (e33373){if((e33373 instanceof Object)){
var ex__33025__auto__ = e33373;
var statearr_33374_34808 = state_33364;
(statearr_33374_34808[(5)] = ex__33025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33373;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34809 = state_33364;
state_33364 = G__34809;
continue;
} else {
return ret_value__33023__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33022__auto__ = function(state_33364){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33022__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33022__auto____1.call(this,state_33364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33022__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33022__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33022__auto__;
})()
;})(__34785,switch__33021__auto__,c__33200__auto___34789,G__33351_34786,G__33351_34787__$1,n__4607__auto___34784,jobs,results,process,async))
})();
var state__33202__auto__ = (function (){var statearr_33375 = (f__33201__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33201__auto__.cljs$core$IFn$_invoke$arity$0() : f__33201__auto__.call(null));
(statearr_33375[(6)] = c__33200__auto___34789);

return statearr_33375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33202__auto__);
});})(__34785,c__33200__auto___34789,G__33351_34786,G__33351_34787__$1,n__4607__auto___34784,jobs,results,process,async))
);


break;
case "async":
var c__33200__auto___34810 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34785,c__33200__auto___34810,G__33351_34786,G__33351_34787__$1,n__4607__auto___34784,jobs,results,process,async){
return (function (){
var f__33201__auto__ = (function (){var switch__33021__auto__ = ((function (__34785,c__33200__auto___34810,G__33351_34786,G__33351_34787__$1,n__4607__auto___34784,jobs,results,process,async){
return (function (state_33388){
var state_val_33389 = (state_33388[(1)]);
if((state_val_33389 === (1))){
var state_33388__$1 = state_33388;
var statearr_33390_34811 = state_33388__$1;
(statearr_33390_34811[(2)] = null);

(statearr_33390_34811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33389 === (2))){
var state_33388__$1 = state_33388;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33388__$1,(4),jobs);
} else {
if((state_val_33389 === (3))){
var inst_33386 = (state_33388[(2)]);
var state_33388__$1 = state_33388;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33388__$1,inst_33386);
} else {
if((state_val_33389 === (4))){
var inst_33378 = (state_33388[(2)]);
var inst_33379 = async(inst_33378);
var state_33388__$1 = state_33388;
if(cljs.core.truth_(inst_33379)){
var statearr_33391_34824 = state_33388__$1;
(statearr_33391_34824[(1)] = (5));

} else {
var statearr_33392_34825 = state_33388__$1;
(statearr_33392_34825[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33389 === (5))){
var state_33388__$1 = state_33388;
var statearr_33393_34828 = state_33388__$1;
(statearr_33393_34828[(2)] = null);

(statearr_33393_34828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33389 === (6))){
var state_33388__$1 = state_33388;
var statearr_33394_34829 = state_33388__$1;
(statearr_33394_34829[(2)] = null);

(statearr_33394_34829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33389 === (7))){
var inst_33384 = (state_33388[(2)]);
var state_33388__$1 = state_33388;
var statearr_33395_34830 = state_33388__$1;
(statearr_33395_34830[(2)] = inst_33384);

(statearr_33395_34830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34785,c__33200__auto___34810,G__33351_34786,G__33351_34787__$1,n__4607__auto___34784,jobs,results,process,async))
;
return ((function (__34785,switch__33021__auto__,c__33200__auto___34810,G__33351_34786,G__33351_34787__$1,n__4607__auto___34784,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33022__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33022__auto____0 = (function (){
var statearr_33396 = [null,null,null,null,null,null,null];
(statearr_33396[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33022__auto__);

(statearr_33396[(1)] = (1));

return statearr_33396;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33022__auto____1 = (function (state_33388){
while(true){
var ret_value__33023__auto__ = (function (){try{while(true){
var result__33024__auto__ = switch__33021__auto__(state_33388);
if(cljs.core.keyword_identical_QMARK_(result__33024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33024__auto__;
}
break;
}
}catch (e33397){if((e33397 instanceof Object)){
var ex__33025__auto__ = e33397;
var statearr_33398_34833 = state_33388;
(statearr_33398_34833[(5)] = ex__33025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33397;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34834 = state_33388;
state_33388 = G__34834;
continue;
} else {
return ret_value__33023__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33022__auto__ = function(state_33388){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33022__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33022__auto____1.call(this,state_33388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33022__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33022__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33022__auto__;
})()
;})(__34785,switch__33021__auto__,c__33200__auto___34810,G__33351_34786,G__33351_34787__$1,n__4607__auto___34784,jobs,results,process,async))
})();
var state__33202__auto__ = (function (){var statearr_33399 = (f__33201__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33201__auto__.cljs$core$IFn$_invoke$arity$0() : f__33201__auto__.call(null));
(statearr_33399[(6)] = c__33200__auto___34810);

return statearr_33399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33202__auto__);
});})(__34785,c__33200__auto___34810,G__33351_34786,G__33351_34787__$1,n__4607__auto___34784,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33351_34787__$1)].join('')));

}

var G__34837 = (__34785 + (1));
__34785 = G__34837;
continue;
} else {
}
break;
}

var c__33200__auto___34838 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33200__auto___34838,jobs,results,process,async){
return (function (){
var f__33201__auto__ = (function (){var switch__33021__auto__ = ((function (c__33200__auto___34838,jobs,results,process,async){
return (function (state_33421){
var state_val_33422 = (state_33421[(1)]);
if((state_val_33422 === (7))){
var inst_33417 = (state_33421[(2)]);
var state_33421__$1 = state_33421;
var statearr_33423_34839 = state_33421__$1;
(statearr_33423_34839[(2)] = inst_33417);

(statearr_33423_34839[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33422 === (1))){
var state_33421__$1 = state_33421;
var statearr_33424_34840 = state_33421__$1;
(statearr_33424_34840[(2)] = null);

(statearr_33424_34840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33422 === (4))){
var inst_33402 = (state_33421[(7)]);
var inst_33402__$1 = (state_33421[(2)]);
var inst_33403 = (inst_33402__$1 == null);
var state_33421__$1 = (function (){var statearr_33425 = state_33421;
(statearr_33425[(7)] = inst_33402__$1);

return statearr_33425;
})();
if(cljs.core.truth_(inst_33403)){
var statearr_33426_34841 = state_33421__$1;
(statearr_33426_34841[(1)] = (5));

} else {
var statearr_33427_34842 = state_33421__$1;
(statearr_33427_34842[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33422 === (6))){
var inst_33402 = (state_33421[(7)]);
var inst_33407 = (state_33421[(8)]);
var inst_33407__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33408 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33409 = [inst_33402,inst_33407__$1];
var inst_33410 = (new cljs.core.PersistentVector(null,2,(5),inst_33408,inst_33409,null));
var state_33421__$1 = (function (){var statearr_33428 = state_33421;
(statearr_33428[(8)] = inst_33407__$1);

return statearr_33428;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33421__$1,(8),jobs,inst_33410);
} else {
if((state_val_33422 === (3))){
var inst_33419 = (state_33421[(2)]);
var state_33421__$1 = state_33421;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33421__$1,inst_33419);
} else {
if((state_val_33422 === (2))){
var state_33421__$1 = state_33421;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33421__$1,(4),from);
} else {
if((state_val_33422 === (9))){
var inst_33414 = (state_33421[(2)]);
var state_33421__$1 = (function (){var statearr_33429 = state_33421;
(statearr_33429[(9)] = inst_33414);

return statearr_33429;
})();
var statearr_33430_34843 = state_33421__$1;
(statearr_33430_34843[(2)] = null);

(statearr_33430_34843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33422 === (5))){
var inst_33405 = cljs.core.async.close_BANG_(jobs);
var state_33421__$1 = state_33421;
var statearr_33431_34844 = state_33421__$1;
(statearr_33431_34844[(2)] = inst_33405);

(statearr_33431_34844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33422 === (8))){
var inst_33407 = (state_33421[(8)]);
var inst_33412 = (state_33421[(2)]);
var state_33421__$1 = (function (){var statearr_33432 = state_33421;
(statearr_33432[(10)] = inst_33412);

return statearr_33432;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33421__$1,(9),results,inst_33407);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__33200__auto___34838,jobs,results,process,async))
;
return ((function (switch__33021__auto__,c__33200__auto___34838,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33022__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33022__auto____0 = (function (){
var statearr_33433 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33433[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33022__auto__);

(statearr_33433[(1)] = (1));

return statearr_33433;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33022__auto____1 = (function (state_33421){
while(true){
var ret_value__33023__auto__ = (function (){try{while(true){
var result__33024__auto__ = switch__33021__auto__(state_33421);
if(cljs.core.keyword_identical_QMARK_(result__33024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33024__auto__;
}
break;
}
}catch (e33434){if((e33434 instanceof Object)){
var ex__33025__auto__ = e33434;
var statearr_33435_34849 = state_33421;
(statearr_33435_34849[(5)] = ex__33025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33421);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33434;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34851 = state_33421;
state_33421 = G__34851;
continue;
} else {
return ret_value__33023__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33022__auto__ = function(state_33421){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33022__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33022__auto____1.call(this,state_33421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33022__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33022__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33022__auto__;
})()
;})(switch__33021__auto__,c__33200__auto___34838,jobs,results,process,async))
})();
var state__33202__auto__ = (function (){var statearr_33436 = (f__33201__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33201__auto__.cljs$core$IFn$_invoke$arity$0() : f__33201__auto__.call(null));
(statearr_33436[(6)] = c__33200__auto___34838);

return statearr_33436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33202__auto__);
});})(c__33200__auto___34838,jobs,results,process,async))
);


var c__33200__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33200__auto__,jobs,results,process,async){
return (function (){
var f__33201__auto__ = (function (){var switch__33021__auto__ = ((function (c__33200__auto__,jobs,results,process,async){
return (function (state_33474){
var state_val_33475 = (state_33474[(1)]);
if((state_val_33475 === (7))){
var inst_33470 = (state_33474[(2)]);
var state_33474__$1 = state_33474;
var statearr_33476_34856 = state_33474__$1;
(statearr_33476_34856[(2)] = inst_33470);

(statearr_33476_34856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33475 === (20))){
var state_33474__$1 = state_33474;
var statearr_33477_34857 = state_33474__$1;
(statearr_33477_34857[(2)] = null);

(statearr_33477_34857[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33475 === (1))){
var state_33474__$1 = state_33474;
var statearr_33478_34858 = state_33474__$1;
(statearr_33478_34858[(2)] = null);

(statearr_33478_34858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33475 === (4))){
var inst_33439 = (state_33474[(7)]);
var inst_33439__$1 = (state_33474[(2)]);
var inst_33440 = (inst_33439__$1 == null);
var state_33474__$1 = (function (){var statearr_33479 = state_33474;
(statearr_33479[(7)] = inst_33439__$1);

return statearr_33479;
})();
if(cljs.core.truth_(inst_33440)){
var statearr_33480_34859 = state_33474__$1;
(statearr_33480_34859[(1)] = (5));

} else {
var statearr_33481_34860 = state_33474__$1;
(statearr_33481_34860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33475 === (15))){
var inst_33452 = (state_33474[(8)]);
var state_33474__$1 = state_33474;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33474__$1,(18),to,inst_33452);
} else {
if((state_val_33475 === (21))){
var inst_33465 = (state_33474[(2)]);
var state_33474__$1 = state_33474;
var statearr_33482_34861 = state_33474__$1;
(statearr_33482_34861[(2)] = inst_33465);

(statearr_33482_34861[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33475 === (13))){
var inst_33467 = (state_33474[(2)]);
var state_33474__$1 = (function (){var statearr_33483 = state_33474;
(statearr_33483[(9)] = inst_33467);

return statearr_33483;
})();
var statearr_33484_34865 = state_33474__$1;
(statearr_33484_34865[(2)] = null);

(statearr_33484_34865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33475 === (6))){
var inst_33439 = (state_33474[(7)]);
var state_33474__$1 = state_33474;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33474__$1,(11),inst_33439);
} else {
if((state_val_33475 === (17))){
var inst_33460 = (state_33474[(2)]);
var state_33474__$1 = state_33474;
if(cljs.core.truth_(inst_33460)){
var statearr_33485_34866 = state_33474__$1;
(statearr_33485_34866[(1)] = (19));

} else {
var statearr_33486_34867 = state_33474__$1;
(statearr_33486_34867[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33475 === (3))){
var inst_33472 = (state_33474[(2)]);
var state_33474__$1 = state_33474;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33474__$1,inst_33472);
} else {
if((state_val_33475 === (12))){
var inst_33449 = (state_33474[(10)]);
var state_33474__$1 = state_33474;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33474__$1,(14),inst_33449);
} else {
if((state_val_33475 === (2))){
var state_33474__$1 = state_33474;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33474__$1,(4),results);
} else {
if((state_val_33475 === (19))){
var state_33474__$1 = state_33474;
var statearr_33487_34869 = state_33474__$1;
(statearr_33487_34869[(2)] = null);

(statearr_33487_34869[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33475 === (11))){
var inst_33449 = (state_33474[(2)]);
var state_33474__$1 = (function (){var statearr_33488 = state_33474;
(statearr_33488[(10)] = inst_33449);

return statearr_33488;
})();
var statearr_33489_34872 = state_33474__$1;
(statearr_33489_34872[(2)] = null);

(statearr_33489_34872[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33475 === (9))){
var state_33474__$1 = state_33474;
var statearr_33490_34874 = state_33474__$1;
(statearr_33490_34874[(2)] = null);

(statearr_33490_34874[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33475 === (5))){
var state_33474__$1 = state_33474;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33491_34875 = state_33474__$1;
(statearr_33491_34875[(1)] = (8));

} else {
var statearr_33492_34876 = state_33474__$1;
(statearr_33492_34876[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33475 === (14))){
var inst_33454 = (state_33474[(11)]);
var inst_33452 = (state_33474[(8)]);
var inst_33452__$1 = (state_33474[(2)]);
var inst_33453 = (inst_33452__$1 == null);
var inst_33454__$1 = cljs.core.not(inst_33453);
var state_33474__$1 = (function (){var statearr_33493 = state_33474;
(statearr_33493[(11)] = inst_33454__$1);

(statearr_33493[(8)] = inst_33452__$1);

return statearr_33493;
})();
if(inst_33454__$1){
var statearr_33494_34878 = state_33474__$1;
(statearr_33494_34878[(1)] = (15));

} else {
var statearr_33495_34879 = state_33474__$1;
(statearr_33495_34879[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33475 === (16))){
var inst_33454 = (state_33474[(11)]);
var state_33474__$1 = state_33474;
var statearr_33496_34880 = state_33474__$1;
(statearr_33496_34880[(2)] = inst_33454);

(statearr_33496_34880[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33475 === (10))){
var inst_33446 = (state_33474[(2)]);
var state_33474__$1 = state_33474;
var statearr_33497_34882 = state_33474__$1;
(statearr_33497_34882[(2)] = inst_33446);

(statearr_33497_34882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33475 === (18))){
var inst_33457 = (state_33474[(2)]);
var state_33474__$1 = state_33474;
var statearr_33498_34884 = state_33474__$1;
(statearr_33498_34884[(2)] = inst_33457);

(statearr_33498_34884[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33475 === (8))){
var inst_33443 = cljs.core.async.close_BANG_(to);
var state_33474__$1 = state_33474;
var statearr_33499_34885 = state_33474__$1;
(statearr_33499_34885[(2)] = inst_33443);

(statearr_33499_34885[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33200__auto__,jobs,results,process,async))
;
return ((function (switch__33021__auto__,c__33200__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33022__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33022__auto____0 = (function (){
var statearr_33500 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33500[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33022__auto__);

(statearr_33500[(1)] = (1));

return statearr_33500;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33022__auto____1 = (function (state_33474){
while(true){
var ret_value__33023__auto__ = (function (){try{while(true){
var result__33024__auto__ = switch__33021__auto__(state_33474);
if(cljs.core.keyword_identical_QMARK_(result__33024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33024__auto__;
}
break;
}
}catch (e33501){if((e33501 instanceof Object)){
var ex__33025__auto__ = e33501;
var statearr_33502_34887 = state_33474;
(statearr_33502_34887[(5)] = ex__33025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33501;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34889 = state_33474;
state_33474 = G__34889;
continue;
} else {
return ret_value__33023__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33022__auto__ = function(state_33474){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33022__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33022__auto____1.call(this,state_33474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33022__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33022__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33022__auto__;
})()
;})(switch__33021__auto__,c__33200__auto__,jobs,results,process,async))
})();
var state__33202__auto__ = (function (){var statearr_33503 = (f__33201__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33201__auto__.cljs$core$IFn$_invoke$arity$0() : f__33201__auto__.call(null));
(statearr_33503[(6)] = c__33200__auto__);

return statearr_33503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33202__auto__);
});})(c__33200__auto__,jobs,results,process,async))
);

return c__33200__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__33505 = arguments.length;
switch (G__33505) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__33507 = arguments.length;
switch (G__33507) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__33509 = arguments.length;
switch (G__33509) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__33200__auto___34911 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33200__auto___34911,tc,fc){
return (function (){
var f__33201__auto__ = (function (){var switch__33021__auto__ = ((function (c__33200__auto___34911,tc,fc){
return (function (state_33535){
var state_val_33536 = (state_33535[(1)]);
if((state_val_33536 === (7))){
var inst_33531 = (state_33535[(2)]);
var state_33535__$1 = state_33535;
var statearr_33537_34912 = state_33535__$1;
(statearr_33537_34912[(2)] = inst_33531);

(statearr_33537_34912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33536 === (1))){
var state_33535__$1 = state_33535;
var statearr_33538_34913 = state_33535__$1;
(statearr_33538_34913[(2)] = null);

(statearr_33538_34913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33536 === (4))){
var inst_33512 = (state_33535[(7)]);
var inst_33512__$1 = (state_33535[(2)]);
var inst_33513 = (inst_33512__$1 == null);
var state_33535__$1 = (function (){var statearr_33539 = state_33535;
(statearr_33539[(7)] = inst_33512__$1);

return statearr_33539;
})();
if(cljs.core.truth_(inst_33513)){
var statearr_33540_34914 = state_33535__$1;
(statearr_33540_34914[(1)] = (5));

} else {
var statearr_33541_34916 = state_33535__$1;
(statearr_33541_34916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33536 === (13))){
var state_33535__$1 = state_33535;
var statearr_33542_34917 = state_33535__$1;
(statearr_33542_34917[(2)] = null);

(statearr_33542_34917[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33536 === (6))){
var inst_33512 = (state_33535[(7)]);
var inst_33518 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33512) : p.call(null,inst_33512));
var state_33535__$1 = state_33535;
if(cljs.core.truth_(inst_33518)){
var statearr_33543_34918 = state_33535__$1;
(statearr_33543_34918[(1)] = (9));

} else {
var statearr_33544_34919 = state_33535__$1;
(statearr_33544_34919[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33536 === (3))){
var inst_33533 = (state_33535[(2)]);
var state_33535__$1 = state_33535;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33535__$1,inst_33533);
} else {
if((state_val_33536 === (12))){
var state_33535__$1 = state_33535;
var statearr_33545_34920 = state_33535__$1;
(statearr_33545_34920[(2)] = null);

(statearr_33545_34920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33536 === (2))){
var state_33535__$1 = state_33535;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33535__$1,(4),ch);
} else {
if((state_val_33536 === (11))){
var inst_33512 = (state_33535[(7)]);
var inst_33522 = (state_33535[(2)]);
var state_33535__$1 = state_33535;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33535__$1,(8),inst_33522,inst_33512);
} else {
if((state_val_33536 === (9))){
var state_33535__$1 = state_33535;
var statearr_33546_34921 = state_33535__$1;
(statearr_33546_34921[(2)] = tc);

(statearr_33546_34921[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33536 === (5))){
var inst_33515 = cljs.core.async.close_BANG_(tc);
var inst_33516 = cljs.core.async.close_BANG_(fc);
var state_33535__$1 = (function (){var statearr_33547 = state_33535;
(statearr_33547[(8)] = inst_33515);

return statearr_33547;
})();
var statearr_33548_34922 = state_33535__$1;
(statearr_33548_34922[(2)] = inst_33516);

(statearr_33548_34922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33536 === (14))){
var inst_33529 = (state_33535[(2)]);
var state_33535__$1 = state_33535;
var statearr_33549_34927 = state_33535__$1;
(statearr_33549_34927[(2)] = inst_33529);

(statearr_33549_34927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33536 === (10))){
var state_33535__$1 = state_33535;
var statearr_33550_34928 = state_33535__$1;
(statearr_33550_34928[(2)] = fc);

(statearr_33550_34928[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33536 === (8))){
var inst_33524 = (state_33535[(2)]);
var state_33535__$1 = state_33535;
if(cljs.core.truth_(inst_33524)){
var statearr_33551_34929 = state_33535__$1;
(statearr_33551_34929[(1)] = (12));

} else {
var statearr_33552_34930 = state_33535__$1;
(statearr_33552_34930[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33200__auto___34911,tc,fc))
;
return ((function (switch__33021__auto__,c__33200__auto___34911,tc,fc){
return (function() {
var cljs$core$async$state_machine__33022__auto__ = null;
var cljs$core$async$state_machine__33022__auto____0 = (function (){
var statearr_33553 = [null,null,null,null,null,null,null,null,null];
(statearr_33553[(0)] = cljs$core$async$state_machine__33022__auto__);

(statearr_33553[(1)] = (1));

return statearr_33553;
});
var cljs$core$async$state_machine__33022__auto____1 = (function (state_33535){
while(true){
var ret_value__33023__auto__ = (function (){try{while(true){
var result__33024__auto__ = switch__33021__auto__(state_33535);
if(cljs.core.keyword_identical_QMARK_(result__33024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33024__auto__;
}
break;
}
}catch (e33554){if((e33554 instanceof Object)){
var ex__33025__auto__ = e33554;
var statearr_33555_34934 = state_33535;
(statearr_33555_34934[(5)] = ex__33025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33554;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34938 = state_33535;
state_33535 = G__34938;
continue;
} else {
return ret_value__33023__auto__;
}
break;
}
});
cljs$core$async$state_machine__33022__auto__ = function(state_33535){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33022__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33022__auto____1.call(this,state_33535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33022__auto____0;
cljs$core$async$state_machine__33022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33022__auto____1;
return cljs$core$async$state_machine__33022__auto__;
})()
;})(switch__33021__auto__,c__33200__auto___34911,tc,fc))
})();
var state__33202__auto__ = (function (){var statearr_33556 = (f__33201__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33201__auto__.cljs$core$IFn$_invoke$arity$0() : f__33201__auto__.call(null));
(statearr_33556[(6)] = c__33200__auto___34911);

return statearr_33556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33202__auto__);
});})(c__33200__auto___34911,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33200__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33200__auto__){
return (function (){
var f__33201__auto__ = (function (){var switch__33021__auto__ = ((function (c__33200__auto__){
return (function (state_33577){
var state_val_33578 = (state_33577[(1)]);
if((state_val_33578 === (7))){
var inst_33573 = (state_33577[(2)]);
var state_33577__$1 = state_33577;
var statearr_33579_34942 = state_33577__$1;
(statearr_33579_34942[(2)] = inst_33573);

(statearr_33579_34942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33578 === (1))){
var inst_33557 = init;
var state_33577__$1 = (function (){var statearr_33580 = state_33577;
(statearr_33580[(7)] = inst_33557);

return statearr_33580;
})();
var statearr_33581_34946 = state_33577__$1;
(statearr_33581_34946[(2)] = null);

(statearr_33581_34946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33578 === (4))){
var inst_33560 = (state_33577[(8)]);
var inst_33560__$1 = (state_33577[(2)]);
var inst_33561 = (inst_33560__$1 == null);
var state_33577__$1 = (function (){var statearr_33582 = state_33577;
(statearr_33582[(8)] = inst_33560__$1);

return statearr_33582;
})();
if(cljs.core.truth_(inst_33561)){
var statearr_33583_34947 = state_33577__$1;
(statearr_33583_34947[(1)] = (5));

} else {
var statearr_33584_34948 = state_33577__$1;
(statearr_33584_34948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33578 === (6))){
var inst_33564 = (state_33577[(9)]);
var inst_33560 = (state_33577[(8)]);
var inst_33557 = (state_33577[(7)]);
var inst_33564__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33557,inst_33560) : f.call(null,inst_33557,inst_33560));
var inst_33565 = cljs.core.reduced_QMARK_(inst_33564__$1);
var state_33577__$1 = (function (){var statearr_33585 = state_33577;
(statearr_33585[(9)] = inst_33564__$1);

return statearr_33585;
})();
if(inst_33565){
var statearr_33586_34951 = state_33577__$1;
(statearr_33586_34951[(1)] = (8));

} else {
var statearr_33587_34952 = state_33577__$1;
(statearr_33587_34952[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33578 === (3))){
var inst_33575 = (state_33577[(2)]);
var state_33577__$1 = state_33577;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33577__$1,inst_33575);
} else {
if((state_val_33578 === (2))){
var state_33577__$1 = state_33577;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33577__$1,(4),ch);
} else {
if((state_val_33578 === (9))){
var inst_33564 = (state_33577[(9)]);
var inst_33557 = inst_33564;
var state_33577__$1 = (function (){var statearr_33588 = state_33577;
(statearr_33588[(7)] = inst_33557);

return statearr_33588;
})();
var statearr_33589_34953 = state_33577__$1;
(statearr_33589_34953[(2)] = null);

(statearr_33589_34953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33578 === (5))){
var inst_33557 = (state_33577[(7)]);
var state_33577__$1 = state_33577;
var statearr_33590_34954 = state_33577__$1;
(statearr_33590_34954[(2)] = inst_33557);

(statearr_33590_34954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33578 === (10))){
var inst_33571 = (state_33577[(2)]);
var state_33577__$1 = state_33577;
var statearr_33591_34958 = state_33577__$1;
(statearr_33591_34958[(2)] = inst_33571);

(statearr_33591_34958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33578 === (8))){
var inst_33564 = (state_33577[(9)]);
var inst_33567 = cljs.core.deref(inst_33564);
var state_33577__$1 = state_33577;
var statearr_33592_34959 = state_33577__$1;
(statearr_33592_34959[(2)] = inst_33567);

(statearr_33592_34959[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__33200__auto__))
;
return ((function (switch__33021__auto__,c__33200__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33022__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33022__auto____0 = (function (){
var statearr_33593 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33593[(0)] = cljs$core$async$reduce_$_state_machine__33022__auto__);

(statearr_33593[(1)] = (1));

return statearr_33593;
});
var cljs$core$async$reduce_$_state_machine__33022__auto____1 = (function (state_33577){
while(true){
var ret_value__33023__auto__ = (function (){try{while(true){
var result__33024__auto__ = switch__33021__auto__(state_33577);
if(cljs.core.keyword_identical_QMARK_(result__33024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33024__auto__;
}
break;
}
}catch (e33594){if((e33594 instanceof Object)){
var ex__33025__auto__ = e33594;
var statearr_33595_34967 = state_33577;
(statearr_33595_34967[(5)] = ex__33025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33594;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34971 = state_33577;
state_33577 = G__34971;
continue;
} else {
return ret_value__33023__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33022__auto__ = function(state_33577){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33022__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33022__auto____1.call(this,state_33577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33022__auto____0;
cljs$core$async$reduce_$_state_machine__33022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33022__auto____1;
return cljs$core$async$reduce_$_state_machine__33022__auto__;
})()
;})(switch__33021__auto__,c__33200__auto__))
})();
var state__33202__auto__ = (function (){var statearr_33596 = (f__33201__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33201__auto__.cljs$core$IFn$_invoke$arity$0() : f__33201__auto__.call(null));
(statearr_33596[(6)] = c__33200__auto__);

return statearr_33596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33202__auto__);
});})(c__33200__auto__))
);

return c__33200__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33200__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33200__auto__,f__$1){
return (function (){
var f__33201__auto__ = (function (){var switch__33021__auto__ = ((function (c__33200__auto__,f__$1){
return (function (state_33602){
var state_val_33603 = (state_33602[(1)]);
if((state_val_33603 === (1))){
var inst_33597 = cljs.core.async.reduce(f__$1,init,ch);
var state_33602__$1 = state_33602;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33602__$1,(2),inst_33597);
} else {
if((state_val_33603 === (2))){
var inst_33599 = (state_33602[(2)]);
var inst_33600 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33599) : f__$1.call(null,inst_33599));
var state_33602__$1 = state_33602;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33602__$1,inst_33600);
} else {
return null;
}
}
});})(c__33200__auto__,f__$1))
;
return ((function (switch__33021__auto__,c__33200__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__33022__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33022__auto____0 = (function (){
var statearr_33604 = [null,null,null,null,null,null,null];
(statearr_33604[(0)] = cljs$core$async$transduce_$_state_machine__33022__auto__);

(statearr_33604[(1)] = (1));

return statearr_33604;
});
var cljs$core$async$transduce_$_state_machine__33022__auto____1 = (function (state_33602){
while(true){
var ret_value__33023__auto__ = (function (){try{while(true){
var result__33024__auto__ = switch__33021__auto__(state_33602);
if(cljs.core.keyword_identical_QMARK_(result__33024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33024__auto__;
}
break;
}
}catch (e33605){if((e33605 instanceof Object)){
var ex__33025__auto__ = e33605;
var statearr_33606_34981 = state_33602;
(statearr_33606_34981[(5)] = ex__33025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33602);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33605;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34982 = state_33602;
state_33602 = G__34982;
continue;
} else {
return ret_value__33023__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33022__auto__ = function(state_33602){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33022__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33022__auto____1.call(this,state_33602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33022__auto____0;
cljs$core$async$transduce_$_state_machine__33022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33022__auto____1;
return cljs$core$async$transduce_$_state_machine__33022__auto__;
})()
;})(switch__33021__auto__,c__33200__auto__,f__$1))
})();
var state__33202__auto__ = (function (){var statearr_33607 = (f__33201__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33201__auto__.cljs$core$IFn$_invoke$arity$0() : f__33201__auto__.call(null));
(statearr_33607[(6)] = c__33200__auto__);

return statearr_33607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33202__auto__);
});})(c__33200__auto__,f__$1))
);

return c__33200__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__33609 = arguments.length;
switch (G__33609) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33200__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33200__auto__){
return (function (){
var f__33201__auto__ = (function (){var switch__33021__auto__ = ((function (c__33200__auto__){
return (function (state_33634){
var state_val_33635 = (state_33634[(1)]);
if((state_val_33635 === (7))){
var inst_33616 = (state_33634[(2)]);
var state_33634__$1 = state_33634;
var statearr_33636_35002 = state_33634__$1;
(statearr_33636_35002[(2)] = inst_33616);

(statearr_33636_35002[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33635 === (1))){
var inst_33610 = cljs.core.seq(coll);
var inst_33611 = inst_33610;
var state_33634__$1 = (function (){var statearr_33637 = state_33634;
(statearr_33637[(7)] = inst_33611);

return statearr_33637;
})();
var statearr_33638_35011 = state_33634__$1;
(statearr_33638_35011[(2)] = null);

(statearr_33638_35011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33635 === (4))){
var inst_33611 = (state_33634[(7)]);
var inst_33614 = cljs.core.first(inst_33611);
var state_33634__$1 = state_33634;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33634__$1,(7),ch,inst_33614);
} else {
if((state_val_33635 === (13))){
var inst_33628 = (state_33634[(2)]);
var state_33634__$1 = state_33634;
var statearr_33639_35014 = state_33634__$1;
(statearr_33639_35014[(2)] = inst_33628);

(statearr_33639_35014[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33635 === (6))){
var inst_33619 = (state_33634[(2)]);
var state_33634__$1 = state_33634;
if(cljs.core.truth_(inst_33619)){
var statearr_33640_35021 = state_33634__$1;
(statearr_33640_35021[(1)] = (8));

} else {
var statearr_33641_35022 = state_33634__$1;
(statearr_33641_35022[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33635 === (3))){
var inst_33632 = (state_33634[(2)]);
var state_33634__$1 = state_33634;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33634__$1,inst_33632);
} else {
if((state_val_33635 === (12))){
var state_33634__$1 = state_33634;
var statearr_33642_35023 = state_33634__$1;
(statearr_33642_35023[(2)] = null);

(statearr_33642_35023[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33635 === (2))){
var inst_33611 = (state_33634[(7)]);
var state_33634__$1 = state_33634;
if(cljs.core.truth_(inst_33611)){
var statearr_33643_35024 = state_33634__$1;
(statearr_33643_35024[(1)] = (4));

} else {
var statearr_33644_35025 = state_33634__$1;
(statearr_33644_35025[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33635 === (11))){
var inst_33625 = cljs.core.async.close_BANG_(ch);
var state_33634__$1 = state_33634;
var statearr_33645_35029 = state_33634__$1;
(statearr_33645_35029[(2)] = inst_33625);

(statearr_33645_35029[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33635 === (9))){
var state_33634__$1 = state_33634;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33646_35032 = state_33634__$1;
(statearr_33646_35032[(1)] = (11));

} else {
var statearr_33647_35033 = state_33634__$1;
(statearr_33647_35033[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33635 === (5))){
var inst_33611 = (state_33634[(7)]);
var state_33634__$1 = state_33634;
var statearr_33648_35034 = state_33634__$1;
(statearr_33648_35034[(2)] = inst_33611);

(statearr_33648_35034[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33635 === (10))){
var inst_33630 = (state_33634[(2)]);
var state_33634__$1 = state_33634;
var statearr_33649_35035 = state_33634__$1;
(statearr_33649_35035[(2)] = inst_33630);

(statearr_33649_35035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33635 === (8))){
var inst_33611 = (state_33634[(7)]);
var inst_33621 = cljs.core.next(inst_33611);
var inst_33611__$1 = inst_33621;
var state_33634__$1 = (function (){var statearr_33650 = state_33634;
(statearr_33650[(7)] = inst_33611__$1);

return statearr_33650;
})();
var statearr_33651_35037 = state_33634__$1;
(statearr_33651_35037[(2)] = null);

(statearr_33651_35037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33200__auto__))
;
return ((function (switch__33021__auto__,c__33200__auto__){
return (function() {
var cljs$core$async$state_machine__33022__auto__ = null;
var cljs$core$async$state_machine__33022__auto____0 = (function (){
var statearr_33652 = [null,null,null,null,null,null,null,null];
(statearr_33652[(0)] = cljs$core$async$state_machine__33022__auto__);

(statearr_33652[(1)] = (1));

return statearr_33652;
});
var cljs$core$async$state_machine__33022__auto____1 = (function (state_33634){
while(true){
var ret_value__33023__auto__ = (function (){try{while(true){
var result__33024__auto__ = switch__33021__auto__(state_33634);
if(cljs.core.keyword_identical_QMARK_(result__33024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33024__auto__;
}
break;
}
}catch (e33653){if((e33653 instanceof Object)){
var ex__33025__auto__ = e33653;
var statearr_33654_35042 = state_33634;
(statearr_33654_35042[(5)] = ex__33025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33653;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35043 = state_33634;
state_33634 = G__35043;
continue;
} else {
return ret_value__33023__auto__;
}
break;
}
});
cljs$core$async$state_machine__33022__auto__ = function(state_33634){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33022__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33022__auto____1.call(this,state_33634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33022__auto____0;
cljs$core$async$state_machine__33022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33022__auto____1;
return cljs$core$async$state_machine__33022__auto__;
})()
;})(switch__33021__auto__,c__33200__auto__))
})();
var state__33202__auto__ = (function (){var statearr_33655 = (f__33201__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33201__auto__.cljs$core$IFn$_invoke$arity$0() : f__33201__auto__.call(null));
(statearr_33655[(6)] = c__33200__auto__);

return statearr_33655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33202__auto__);
});})(c__33200__auto__))
);

return c__33200__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33656 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33656 = (function (ch,cs,meta33657){
this.ch = ch;
this.cs = cs;
this.meta33657 = meta33657;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33658,meta33657__$1){
var self__ = this;
var _33658__$1 = this;
return (new cljs.core.async.t_cljs$core$async33656(self__.ch,self__.cs,meta33657__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33656.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33658){
var self__ = this;
var _33658__$1 = this;
return self__.meta33657;
});})(cs))
;

cljs.core.async.t_cljs$core$async33656.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33656.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33656.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33656.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33656.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33656.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33656.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33657","meta33657",-1572299145,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33656.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33656.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33656";

cljs.core.async.t_cljs$core$async33656.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33656");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33656.
 */
cljs.core.async.__GT_t_cljs$core$async33656 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33656(ch__$1,cs__$1,meta33657){
return (new cljs.core.async.t_cljs$core$async33656(ch__$1,cs__$1,meta33657));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33656(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__33200__auto___35080 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33200__auto___35080,cs,m,dchan,dctr,done){
return (function (){
var f__33201__auto__ = (function (){var switch__33021__auto__ = ((function (c__33200__auto___35080,cs,m,dchan,dctr,done){
return (function (state_33793){
var state_val_33794 = (state_33793[(1)]);
if((state_val_33794 === (7))){
var inst_33789 = (state_33793[(2)]);
var state_33793__$1 = state_33793;
var statearr_33795_35088 = state_33793__$1;
(statearr_33795_35088[(2)] = inst_33789);

(statearr_33795_35088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33794 === (20))){
var inst_33692 = (state_33793[(7)]);
var inst_33704 = cljs.core.first(inst_33692);
var inst_33705 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33704,(0),null);
var inst_33706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33704,(1),null);
var state_33793__$1 = (function (){var statearr_33796 = state_33793;
(statearr_33796[(8)] = inst_33705);

return statearr_33796;
})();
if(cljs.core.truth_(inst_33706)){
var statearr_33797_35093 = state_33793__$1;
(statearr_33797_35093[(1)] = (22));

} else {
var statearr_33798_35094 = state_33793__$1;
(statearr_33798_35094[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33794 === (27))){
var inst_33661 = (state_33793[(9)]);
var inst_33734 = (state_33793[(10)]);
var inst_33741 = (state_33793[(11)]);
var inst_33736 = (state_33793[(12)]);
var inst_33741__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_33734,inst_33736);
var inst_33742 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33741__$1,inst_33661,done);
var state_33793__$1 = (function (){var statearr_33799 = state_33793;
(statearr_33799[(11)] = inst_33741__$1);

return statearr_33799;
})();
if(cljs.core.truth_(inst_33742)){
var statearr_33800_35098 = state_33793__$1;
(statearr_33800_35098[(1)] = (30));

} else {
var statearr_33801_35099 = state_33793__$1;
(statearr_33801_35099[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33794 === (1))){
var state_33793__$1 = state_33793;
var statearr_33802_35102 = state_33793__$1;
(statearr_33802_35102[(2)] = null);

(statearr_33802_35102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33794 === (24))){
var inst_33692 = (state_33793[(7)]);
var inst_33711 = (state_33793[(2)]);
var inst_33712 = cljs.core.next(inst_33692);
var inst_33670 = inst_33712;
var inst_33671 = null;
var inst_33672 = (0);
var inst_33673 = (0);
var state_33793__$1 = (function (){var statearr_33803 = state_33793;
(statearr_33803[(13)] = inst_33670);

(statearr_33803[(14)] = inst_33671);

(statearr_33803[(15)] = inst_33673);

(statearr_33803[(16)] = inst_33711);

(statearr_33803[(17)] = inst_33672);

return statearr_33803;
})();
var statearr_33804_35110 = state_33793__$1;
(statearr_33804_35110[(2)] = null);

(statearr_33804_35110[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33794 === (39))){
var state_33793__$1 = state_33793;
var statearr_33808_35113 = state_33793__$1;
(statearr_33808_35113[(2)] = null);

(statearr_33808_35113[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33794 === (4))){
var inst_33661 = (state_33793[(9)]);
var inst_33661__$1 = (state_33793[(2)]);
var inst_33662 = (inst_33661__$1 == null);
var state_33793__$1 = (function (){var statearr_33809 = state_33793;
(statearr_33809[(9)] = inst_33661__$1);

return statearr_33809;
})();
if(cljs.core.truth_(inst_33662)){
var statearr_33810_35117 = state_33793__$1;
(statearr_33810_35117[(1)] = (5));

} else {
var statearr_33811_35118 = state_33793__$1;
(statearr_33811_35118[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33794 === (15))){
var inst_33670 = (state_33793[(13)]);
var inst_33671 = (state_33793[(14)]);
var inst_33673 = (state_33793[(15)]);
var inst_33672 = (state_33793[(17)]);
var inst_33688 = (state_33793[(2)]);
var inst_33689 = (inst_33673 + (1));
var tmp33805 = inst_33670;
var tmp33806 = inst_33671;
var tmp33807 = inst_33672;
var inst_33670__$1 = tmp33805;
var inst_33671__$1 = tmp33806;
var inst_33672__$1 = tmp33807;
var inst_33673__$1 = inst_33689;
var state_33793__$1 = (function (){var statearr_33812 = state_33793;
(statearr_33812[(18)] = inst_33688);

(statearr_33812[(13)] = inst_33670__$1);

(statearr_33812[(14)] = inst_33671__$1);

(statearr_33812[(15)] = inst_33673__$1);

(statearr_33812[(17)] = inst_33672__$1);

return statearr_33812;
})();
var statearr_33813_35120 = state_33793__$1;
(statearr_33813_35120[(2)] = null);

(statearr_33813_35120[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33794 === (21))){
var inst_33715 = (state_33793[(2)]);
var state_33793__$1 = state_33793;
var statearr_33817_35124 = state_33793__$1;
(statearr_33817_35124[(2)] = inst_33715);

(statearr_33817_35124[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33794 === (31))){
var inst_33741 = (state_33793[(11)]);
var inst_33745 = done(null);
var inst_33746 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33741);
var state_33793__$1 = (function (){var statearr_33818 = state_33793;
(statearr_33818[(19)] = inst_33745);

return statearr_33818;
})();
var statearr_33819_35133 = state_33793__$1;
(statearr_33819_35133[(2)] = inst_33746);

(statearr_33819_35133[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33794 === (32))){
var inst_33734 = (state_33793[(10)]);
var inst_33733 = (state_33793[(20)]);
var inst_33736 = (state_33793[(12)]);
var inst_33735 = (state_33793[(21)]);
var inst_33748 = (state_33793[(2)]);
var inst_33749 = (inst_33736 + (1));
var tmp33814 = inst_33734;
var tmp33815 = inst_33733;
var tmp33816 = inst_33735;
var inst_33733__$1 = tmp33815;
var inst_33734__$1 = tmp33814;
var inst_33735__$1 = tmp33816;
var inst_33736__$1 = inst_33749;
var state_33793__$1 = (function (){var statearr_33820 = state_33793;
(statearr_33820[(10)] = inst_33734__$1);

(statearr_33820[(20)] = inst_33733__$1);

(statearr_33820[(22)] = inst_33748);

(statearr_33820[(12)] = inst_33736__$1);

(statearr_33820[(21)] = inst_33735__$1);

return statearr_33820;
})();
var statearr_33821_35140 = state_33793__$1;
(statearr_33821_35140[(2)] = null);

(statearr_33821_35140[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33794 === (40))){
var inst_33761 = (state_33793[(23)]);
var inst_33765 = done(null);
var inst_33766 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33761);
var state_33793__$1 = (function (){var statearr_33822 = state_33793;
(statearr_33822[(24)] = inst_33765);

return statearr_33822;
})();
var statearr_33823_35142 = state_33793__$1;
(statearr_33823_35142[(2)] = inst_33766);

(statearr_33823_35142[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33794 === (33))){
var inst_33752 = (state_33793[(25)]);
var inst_33754 = cljs.core.chunked_seq_QMARK_(inst_33752);
var state_33793__$1 = state_33793;
if(inst_33754){
var statearr_33824_35145 = state_33793__$1;
(statearr_33824_35145[(1)] = (36));

} else {
var statearr_33825_35146 = state_33793__$1;
(statearr_33825_35146[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33794 === (13))){
var inst_33682 = (state_33793[(26)]);
var inst_33685 = cljs.core.async.close_BANG_(inst_33682);
var state_33793__$1 = state_33793;
var statearr_33826_35155 = state_33793__$1;
(statearr_33826_35155[(2)] = inst_33685);

(statearr_33826_35155[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33794 === (22))){
var inst_33705 = (state_33793[(8)]);
var inst_33708 = cljs.core.async.close_BANG_(inst_33705);
var state_33793__$1 = state_33793;
var statearr_33827_35157 = state_33793__$1;
(statearr_33827_35157[(2)] = inst_33708);

(statearr_33827_35157[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33794 === (36))){
var inst_33752 = (state_33793[(25)]);
var inst_33756 = cljs.core.chunk_first(inst_33752);
var inst_33757 = cljs.core.chunk_rest(inst_33752);
var inst_33758 = cljs.core.count(inst_33756);
var inst_33733 = inst_33757;
var inst_33734 = inst_33756;
var inst_33735 = inst_33758;
var inst_33736 = (0);
var state_33793__$1 = (function (){var statearr_33828 = state_33793;
(statearr_33828[(10)] = inst_33734);

(statearr_33828[(20)] = inst_33733);

(statearr_33828[(12)] = inst_33736);

(statearr_33828[(21)] = inst_33735);

return statearr_33828;
})();
var statearr_33829_35162 = state_33793__$1;
(statearr_33829_35162[(2)] = null);

(statearr_33829_35162[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33794 === (41))){
var inst_33752 = (state_33793[(25)]);
var inst_33768 = (state_33793[(2)]);
var inst_33769 = cljs.core.next(inst_33752);
var inst_33733 = inst_33769;
var inst_33734 = null;
var inst_33735 = (0);
var inst_33736 = (0);
var state_33793__$1 = (function (){var statearr_33830 = state_33793;
(statearr_33830[(10)] = inst_33734);

(statearr_33830[(20)] = inst_33733);

(statearr_33830[(27)] = inst_33768);

(statearr_33830[(12)] = inst_33736);

(statearr_33830[(21)] = inst_33735);

return statearr_33830;
})();
var statearr_33831_35166 = state_33793__$1;
(statearr_33831_35166[(2)] = null);

(statearr_33831_35166[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33794 === (43))){
var state_33793__$1 = state_33793;
var statearr_33832_35169 = state_33793__$1;
(statearr_33832_35169[(2)] = null);

(statearr_33832_35169[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33794 === (29))){
var inst_33777 = (state_33793[(2)]);
var state_33793__$1 = state_33793;
var statearr_33833_35170 = state_33793__$1;
(statearr_33833_35170[(2)] = inst_33777);

(statearr_33833_35170[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33794 === (44))){
var inst_33786 = (state_33793[(2)]);
var state_33793__$1 = (function (){var statearr_33834 = state_33793;
(statearr_33834[(28)] = inst_33786);

return statearr_33834;
})();
var statearr_33835_35172 = state_33793__$1;
(statearr_33835_35172[(2)] = null);

(statearr_33835_35172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33794 === (6))){
var inst_33725 = (state_33793[(29)]);
var inst_33724 = cljs.core.deref(cs);
var inst_33725__$1 = cljs.core.keys(inst_33724);
var inst_33726 = cljs.core.count(inst_33725__$1);
var inst_33727 = cljs.core.reset_BANG_(dctr,inst_33726);
var inst_33732 = cljs.core.seq(inst_33725__$1);
var inst_33733 = inst_33732;
var inst_33734 = null;
var inst_33735 = (0);
var inst_33736 = (0);
var state_33793__$1 = (function (){var statearr_33836 = state_33793;
(statearr_33836[(29)] = inst_33725__$1);

(statearr_33836[(30)] = inst_33727);

(statearr_33836[(10)] = inst_33734);

(statearr_33836[(20)] = inst_33733);

(statearr_33836[(12)] = inst_33736);

(statearr_33836[(21)] = inst_33735);

return statearr_33836;
})();
var statearr_33837_35177 = state_33793__$1;
(statearr_33837_35177[(2)] = null);

(statearr_33837_35177[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33794 === (28))){
var inst_33733 = (state_33793[(20)]);
var inst_33752 = (state_33793[(25)]);
var inst_33752__$1 = cljs.core.seq(inst_33733);
var state_33793__$1 = (function (){var statearr_33838 = state_33793;
(statearr_33838[(25)] = inst_33752__$1);

return statearr_33838;
})();
if(inst_33752__$1){
var statearr_33839_35181 = state_33793__$1;
(statearr_33839_35181[(1)] = (33));

} else {
var statearr_33840_35182 = state_33793__$1;
(statearr_33840_35182[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33794 === (25))){
var inst_33736 = (state_33793[(12)]);
var inst_33735 = (state_33793[(21)]);
var inst_33738 = (inst_33736 < inst_33735);
var inst_33739 = inst_33738;
var state_33793__$1 = state_33793;
if(cljs.core.truth_(inst_33739)){
var statearr_33841_35185 = state_33793__$1;
(statearr_33841_35185[(1)] = (27));

} else {
var statearr_33842_35186 = state_33793__$1;
(statearr_33842_35186[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33794 === (34))){
var state_33793__$1 = state_33793;
var statearr_33843_35189 = state_33793__$1;
(statearr_33843_35189[(2)] = null);

(statearr_33843_35189[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33794 === (17))){
var state_33793__$1 = state_33793;
var statearr_33844_35190 = state_33793__$1;
(statearr_33844_35190[(2)] = null);

(statearr_33844_35190[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33794 === (3))){
var inst_33791 = (state_33793[(2)]);
var state_33793__$1 = state_33793;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33793__$1,inst_33791);
} else {
if((state_val_33794 === (12))){
var inst_33720 = (state_33793[(2)]);
var state_33793__$1 = state_33793;
var statearr_33845_35196 = state_33793__$1;
(statearr_33845_35196[(2)] = inst_33720);

(statearr_33845_35196[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33794 === (2))){
var state_33793__$1 = state_33793;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33793__$1,(4),ch);
} else {
if((state_val_33794 === (23))){
var state_33793__$1 = state_33793;
var statearr_33846_35201 = state_33793__$1;
(statearr_33846_35201[(2)] = null);

(statearr_33846_35201[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33794 === (35))){
var inst_33775 = (state_33793[(2)]);
var state_33793__$1 = state_33793;
var statearr_33847_35202 = state_33793__$1;
(statearr_33847_35202[(2)] = inst_33775);

(statearr_33847_35202[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33794 === (19))){
var inst_33692 = (state_33793[(7)]);
var inst_33696 = cljs.core.chunk_first(inst_33692);
var inst_33697 = cljs.core.chunk_rest(inst_33692);
var inst_33698 = cljs.core.count(inst_33696);
var inst_33670 = inst_33697;
var inst_33671 = inst_33696;
var inst_33672 = inst_33698;
var inst_33673 = (0);
var state_33793__$1 = (function (){var statearr_33848 = state_33793;
(statearr_33848[(13)] = inst_33670);

(statearr_33848[(14)] = inst_33671);

(statearr_33848[(15)] = inst_33673);

(statearr_33848[(17)] = inst_33672);

return statearr_33848;
})();
var statearr_33849_35203 = state_33793__$1;
(statearr_33849_35203[(2)] = null);

(statearr_33849_35203[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33794 === (11))){
var inst_33670 = (state_33793[(13)]);
var inst_33692 = (state_33793[(7)]);
var inst_33692__$1 = cljs.core.seq(inst_33670);
var state_33793__$1 = (function (){var statearr_33850 = state_33793;
(statearr_33850[(7)] = inst_33692__$1);

return statearr_33850;
})();
if(inst_33692__$1){
var statearr_33851_35204 = state_33793__$1;
(statearr_33851_35204[(1)] = (16));

} else {
var statearr_33852_35205 = state_33793__$1;
(statearr_33852_35205[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33794 === (9))){
var inst_33722 = (state_33793[(2)]);
var state_33793__$1 = state_33793;
var statearr_33853_35206 = state_33793__$1;
(statearr_33853_35206[(2)] = inst_33722);

(statearr_33853_35206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33794 === (5))){
var inst_33668 = cljs.core.deref(cs);
var inst_33669 = cljs.core.seq(inst_33668);
var inst_33670 = inst_33669;
var inst_33671 = null;
var inst_33672 = (0);
var inst_33673 = (0);
var state_33793__$1 = (function (){var statearr_33854 = state_33793;
(statearr_33854[(13)] = inst_33670);

(statearr_33854[(14)] = inst_33671);

(statearr_33854[(15)] = inst_33673);

(statearr_33854[(17)] = inst_33672);

return statearr_33854;
})();
var statearr_33855_35209 = state_33793__$1;
(statearr_33855_35209[(2)] = null);

(statearr_33855_35209[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33794 === (14))){
var state_33793__$1 = state_33793;
var statearr_33856_35212 = state_33793__$1;
(statearr_33856_35212[(2)] = null);

(statearr_33856_35212[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33794 === (45))){
var inst_33783 = (state_33793[(2)]);
var state_33793__$1 = state_33793;
var statearr_33857_35213 = state_33793__$1;
(statearr_33857_35213[(2)] = inst_33783);

(statearr_33857_35213[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33794 === (26))){
var inst_33725 = (state_33793[(29)]);
var inst_33779 = (state_33793[(2)]);
var inst_33780 = cljs.core.seq(inst_33725);
var state_33793__$1 = (function (){var statearr_33858 = state_33793;
(statearr_33858[(31)] = inst_33779);

return statearr_33858;
})();
if(inst_33780){
var statearr_33859_35217 = state_33793__$1;
(statearr_33859_35217[(1)] = (42));

} else {
var statearr_33860_35219 = state_33793__$1;
(statearr_33860_35219[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33794 === (16))){
var inst_33692 = (state_33793[(7)]);
var inst_33694 = cljs.core.chunked_seq_QMARK_(inst_33692);
var state_33793__$1 = state_33793;
if(inst_33694){
var statearr_33861_35222 = state_33793__$1;
(statearr_33861_35222[(1)] = (19));

} else {
var statearr_33862_35223 = state_33793__$1;
(statearr_33862_35223[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33794 === (38))){
var inst_33772 = (state_33793[(2)]);
var state_33793__$1 = state_33793;
var statearr_33863_35224 = state_33793__$1;
(statearr_33863_35224[(2)] = inst_33772);

(statearr_33863_35224[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33794 === (30))){
var state_33793__$1 = state_33793;
var statearr_33864_35225 = state_33793__$1;
(statearr_33864_35225[(2)] = null);

(statearr_33864_35225[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33794 === (10))){
var inst_33671 = (state_33793[(14)]);
var inst_33673 = (state_33793[(15)]);
var inst_33681 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_33671,inst_33673);
var inst_33682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33681,(0),null);
var inst_33683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33681,(1),null);
var state_33793__$1 = (function (){var statearr_33865 = state_33793;
(statearr_33865[(26)] = inst_33682);

return statearr_33865;
})();
if(cljs.core.truth_(inst_33683)){
var statearr_33866_35226 = state_33793__$1;
(statearr_33866_35226[(1)] = (13));

} else {
var statearr_33867_35228 = state_33793__$1;
(statearr_33867_35228[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33794 === (18))){
var inst_33718 = (state_33793[(2)]);
var state_33793__$1 = state_33793;
var statearr_33868_35229 = state_33793__$1;
(statearr_33868_35229[(2)] = inst_33718);

(statearr_33868_35229[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33794 === (42))){
var state_33793__$1 = state_33793;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33793__$1,(45),dchan);
} else {
if((state_val_33794 === (37))){
var inst_33661 = (state_33793[(9)]);
var inst_33752 = (state_33793[(25)]);
var inst_33761 = (state_33793[(23)]);
var inst_33761__$1 = cljs.core.first(inst_33752);
var inst_33762 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33761__$1,inst_33661,done);
var state_33793__$1 = (function (){var statearr_33869 = state_33793;
(statearr_33869[(23)] = inst_33761__$1);

return statearr_33869;
})();
if(cljs.core.truth_(inst_33762)){
var statearr_33870_35231 = state_33793__$1;
(statearr_33870_35231[(1)] = (39));

} else {
var statearr_33871_35232 = state_33793__$1;
(statearr_33871_35232[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33794 === (8))){
var inst_33673 = (state_33793[(15)]);
var inst_33672 = (state_33793[(17)]);
var inst_33675 = (inst_33673 < inst_33672);
var inst_33676 = inst_33675;
var state_33793__$1 = state_33793;
if(cljs.core.truth_(inst_33676)){
var statearr_33872_35233 = state_33793__$1;
(statearr_33872_35233[(1)] = (10));

} else {
var statearr_33873_35234 = state_33793__$1;
(statearr_33873_35234[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33200__auto___35080,cs,m,dchan,dctr,done))
;
return ((function (switch__33021__auto__,c__33200__auto___35080,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33022__auto__ = null;
var cljs$core$async$mult_$_state_machine__33022__auto____0 = (function (){
var statearr_33874 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33874[(0)] = cljs$core$async$mult_$_state_machine__33022__auto__);

(statearr_33874[(1)] = (1));

return statearr_33874;
});
var cljs$core$async$mult_$_state_machine__33022__auto____1 = (function (state_33793){
while(true){
var ret_value__33023__auto__ = (function (){try{while(true){
var result__33024__auto__ = switch__33021__auto__(state_33793);
if(cljs.core.keyword_identical_QMARK_(result__33024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33024__auto__;
}
break;
}
}catch (e33875){if((e33875 instanceof Object)){
var ex__33025__auto__ = e33875;
var statearr_33876_35235 = state_33793;
(statearr_33876_35235[(5)] = ex__33025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33875;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35236 = state_33793;
state_33793 = G__35236;
continue;
} else {
return ret_value__33023__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33022__auto__ = function(state_33793){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33022__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33022__auto____1.call(this,state_33793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33022__auto____0;
cljs$core$async$mult_$_state_machine__33022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33022__auto____1;
return cljs$core$async$mult_$_state_machine__33022__auto__;
})()
;})(switch__33021__auto__,c__33200__auto___35080,cs,m,dchan,dctr,done))
})();
var state__33202__auto__ = (function (){var statearr_33877 = (f__33201__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33201__auto__.cljs$core$IFn$_invoke$arity$0() : f__33201__auto__.call(null));
(statearr_33877[(6)] = c__33200__auto___35080);

return statearr_33877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33202__auto__);
});})(c__33200__auto___35080,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__33879 = arguments.length;
switch (G__33879) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35245 = arguments.length;
var i__4731__auto___35246 = (0);
while(true){
if((i__4731__auto___35246 < len__4730__auto___35245)){
args__4736__auto__.push((arguments[i__4731__auto___35246]));

var G__35247 = (i__4731__auto___35246 + (1));
i__4731__auto___35246 = G__35247;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33884){
var map__33885 = p__33884;
var map__33885__$1 = (((((!((map__33885 == null))))?(((((map__33885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33885):map__33885);
var opts = map__33885__$1;
var statearr_33887_35248 = state;
(statearr_33887_35248[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts(((function (map__33885,map__33885__$1,opts){
return (function (val){
var statearr_33888_35249 = state;
(statearr_33888_35249[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__33885,map__33885__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_33889_35250 = state;
(statearr_33889_35250[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33880){
var G__33881 = cljs.core.first(seq33880);
var seq33880__$1 = cljs.core.next(seq33880);
var G__33882 = cljs.core.first(seq33880__$1);
var seq33880__$2 = cljs.core.next(seq33880__$1);
var G__33883 = cljs.core.first(seq33880__$2);
var seq33880__$3 = cljs.core.next(seq33880__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33881,G__33882,G__33883,seq33880__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33890 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33890 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33891){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33891 = meta33891;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33890.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33892,meta33891__$1){
var self__ = this;
var _33892__$1 = this;
return (new cljs.core.async.t_cljs$core$async33890(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33891__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33890.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33892){
var self__ = this;
var _33892__$1 = this;
return self__.meta33891;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33890.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33890.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33890.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33890.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33890.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33890.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33890.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33890.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33890.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33891","meta33891",554769935,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33890.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33890.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33890";

cljs.core.async.t_cljs$core$async33890.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33890");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33890.
 */
cljs.core.async.__GT_t_cljs$core$async33890 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async33890(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33891){
return (new cljs.core.async.t_cljs$core$async33890(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33891));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async33890(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33200__auto___35291 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33200__auto___35291,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33201__auto__ = (function (){var switch__33021__auto__ = ((function (c__33200__auto___35291,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33994){
var state_val_33995 = (state_33994[(1)]);
if((state_val_33995 === (7))){
var inst_33909 = (state_33994[(2)]);
var state_33994__$1 = state_33994;
var statearr_33996_35294 = state_33994__$1;
(statearr_33996_35294[(2)] = inst_33909);

(statearr_33996_35294[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (20))){
var inst_33921 = (state_33994[(7)]);
var state_33994__$1 = state_33994;
var statearr_33997_35295 = state_33994__$1;
(statearr_33997_35295[(2)] = inst_33921);

(statearr_33997_35295[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (27))){
var state_33994__$1 = state_33994;
var statearr_33998_35296 = state_33994__$1;
(statearr_33998_35296[(2)] = null);

(statearr_33998_35296[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (1))){
var inst_33896 = (state_33994[(8)]);
var inst_33896__$1 = calc_state();
var inst_33898 = (inst_33896__$1 == null);
var inst_33899 = cljs.core.not(inst_33898);
var state_33994__$1 = (function (){var statearr_33999 = state_33994;
(statearr_33999[(8)] = inst_33896__$1);

return statearr_33999;
})();
if(inst_33899){
var statearr_34000_35298 = state_33994__$1;
(statearr_34000_35298[(1)] = (2));

} else {
var statearr_34001_35299 = state_33994__$1;
(statearr_34001_35299[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (24))){
var inst_33954 = (state_33994[(9)]);
var inst_33945 = (state_33994[(10)]);
var inst_33968 = (state_33994[(11)]);
var inst_33968__$1 = (inst_33945.cljs$core$IFn$_invoke$arity$1 ? inst_33945.cljs$core$IFn$_invoke$arity$1(inst_33954) : inst_33945.call(null,inst_33954));
var state_33994__$1 = (function (){var statearr_34002 = state_33994;
(statearr_34002[(11)] = inst_33968__$1);

return statearr_34002;
})();
if(cljs.core.truth_(inst_33968__$1)){
var statearr_34003_35300 = state_33994__$1;
(statearr_34003_35300[(1)] = (29));

} else {
var statearr_34004_35301 = state_33994__$1;
(statearr_34004_35301[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (4))){
var inst_33912 = (state_33994[(2)]);
var state_33994__$1 = state_33994;
if(cljs.core.truth_(inst_33912)){
var statearr_34005_35306 = state_33994__$1;
(statearr_34005_35306[(1)] = (8));

} else {
var statearr_34006_35307 = state_33994__$1;
(statearr_34006_35307[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (15))){
var inst_33939 = (state_33994[(2)]);
var state_33994__$1 = state_33994;
if(cljs.core.truth_(inst_33939)){
var statearr_34007_35308 = state_33994__$1;
(statearr_34007_35308[(1)] = (19));

} else {
var statearr_34008_35309 = state_33994__$1;
(statearr_34008_35309[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (21))){
var inst_33944 = (state_33994[(12)]);
var inst_33944__$1 = (state_33994[(2)]);
var inst_33945 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33944__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33946 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33944__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33947 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33944__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33994__$1 = (function (){var statearr_34009 = state_33994;
(statearr_34009[(12)] = inst_33944__$1);

(statearr_34009[(13)] = inst_33946);

(statearr_34009[(10)] = inst_33945);

return statearr_34009;
})();
return cljs.core.async.ioc_alts_BANG_(state_33994__$1,(22),inst_33947);
} else {
if((state_val_33995 === (31))){
var inst_33976 = (state_33994[(2)]);
var state_33994__$1 = state_33994;
if(cljs.core.truth_(inst_33976)){
var statearr_34010_35310 = state_33994__$1;
(statearr_34010_35310[(1)] = (32));

} else {
var statearr_34011_35311 = state_33994__$1;
(statearr_34011_35311[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (32))){
var inst_33953 = (state_33994[(14)]);
var state_33994__$1 = state_33994;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33994__$1,(35),out,inst_33953);
} else {
if((state_val_33995 === (33))){
var inst_33944 = (state_33994[(12)]);
var inst_33921 = inst_33944;
var state_33994__$1 = (function (){var statearr_34012 = state_33994;
(statearr_34012[(7)] = inst_33921);

return statearr_34012;
})();
var statearr_34013_35316 = state_33994__$1;
(statearr_34013_35316[(2)] = null);

(statearr_34013_35316[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (13))){
var inst_33921 = (state_33994[(7)]);
var inst_33928 = inst_33921.cljs$lang$protocol_mask$partition0$;
var inst_33929 = (inst_33928 & (64));
var inst_33930 = inst_33921.cljs$core$ISeq$;
var inst_33931 = (cljs.core.PROTOCOL_SENTINEL === inst_33930);
var inst_33932 = ((inst_33929) || (inst_33931));
var state_33994__$1 = state_33994;
if(cljs.core.truth_(inst_33932)){
var statearr_34014_35318 = state_33994__$1;
(statearr_34014_35318[(1)] = (16));

} else {
var statearr_34015_35319 = state_33994__$1;
(statearr_34015_35319[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (22))){
var inst_33954 = (state_33994[(9)]);
var inst_33953 = (state_33994[(14)]);
var inst_33952 = (state_33994[(2)]);
var inst_33953__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33952,(0),null);
var inst_33954__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33952,(1),null);
var inst_33955 = (inst_33953__$1 == null);
var inst_33956 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33954__$1,change);
var inst_33957 = ((inst_33955) || (inst_33956));
var state_33994__$1 = (function (){var statearr_34016 = state_33994;
(statearr_34016[(9)] = inst_33954__$1);

(statearr_34016[(14)] = inst_33953__$1);

return statearr_34016;
})();
if(cljs.core.truth_(inst_33957)){
var statearr_34017_35320 = state_33994__$1;
(statearr_34017_35320[(1)] = (23));

} else {
var statearr_34018_35321 = state_33994__$1;
(statearr_34018_35321[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (36))){
var inst_33944 = (state_33994[(12)]);
var inst_33921 = inst_33944;
var state_33994__$1 = (function (){var statearr_34019 = state_33994;
(statearr_34019[(7)] = inst_33921);

return statearr_34019;
})();
var statearr_34020_35323 = state_33994__$1;
(statearr_34020_35323[(2)] = null);

(statearr_34020_35323[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (29))){
var inst_33968 = (state_33994[(11)]);
var state_33994__$1 = state_33994;
var statearr_34021_35324 = state_33994__$1;
(statearr_34021_35324[(2)] = inst_33968);

(statearr_34021_35324[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (6))){
var state_33994__$1 = state_33994;
var statearr_34022_35325 = state_33994__$1;
(statearr_34022_35325[(2)] = false);

(statearr_34022_35325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (28))){
var inst_33964 = (state_33994[(2)]);
var inst_33965 = calc_state();
var inst_33921 = inst_33965;
var state_33994__$1 = (function (){var statearr_34023 = state_33994;
(statearr_34023[(7)] = inst_33921);

(statearr_34023[(15)] = inst_33964);

return statearr_34023;
})();
var statearr_34024_35330 = state_33994__$1;
(statearr_34024_35330[(2)] = null);

(statearr_34024_35330[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (25))){
var inst_33990 = (state_33994[(2)]);
var state_33994__$1 = state_33994;
var statearr_34025_35331 = state_33994__$1;
(statearr_34025_35331[(2)] = inst_33990);

(statearr_34025_35331[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (34))){
var inst_33988 = (state_33994[(2)]);
var state_33994__$1 = state_33994;
var statearr_34026_35332 = state_33994__$1;
(statearr_34026_35332[(2)] = inst_33988);

(statearr_34026_35332[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (17))){
var state_33994__$1 = state_33994;
var statearr_34027_35333 = state_33994__$1;
(statearr_34027_35333[(2)] = false);

(statearr_34027_35333[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (3))){
var state_33994__$1 = state_33994;
var statearr_34028_35334 = state_33994__$1;
(statearr_34028_35334[(2)] = false);

(statearr_34028_35334[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (12))){
var inst_33992 = (state_33994[(2)]);
var state_33994__$1 = state_33994;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33994__$1,inst_33992);
} else {
if((state_val_33995 === (2))){
var inst_33896 = (state_33994[(8)]);
var inst_33901 = inst_33896.cljs$lang$protocol_mask$partition0$;
var inst_33902 = (inst_33901 & (64));
var inst_33903 = inst_33896.cljs$core$ISeq$;
var inst_33904 = (cljs.core.PROTOCOL_SENTINEL === inst_33903);
var inst_33905 = ((inst_33902) || (inst_33904));
var state_33994__$1 = state_33994;
if(cljs.core.truth_(inst_33905)){
var statearr_34029_35335 = state_33994__$1;
(statearr_34029_35335[(1)] = (5));

} else {
var statearr_34030_35336 = state_33994__$1;
(statearr_34030_35336[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (23))){
var inst_33953 = (state_33994[(14)]);
var inst_33959 = (inst_33953 == null);
var state_33994__$1 = state_33994;
if(cljs.core.truth_(inst_33959)){
var statearr_34031_35337 = state_33994__$1;
(statearr_34031_35337[(1)] = (26));

} else {
var statearr_34032_35338 = state_33994__$1;
(statearr_34032_35338[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (35))){
var inst_33979 = (state_33994[(2)]);
var state_33994__$1 = state_33994;
if(cljs.core.truth_(inst_33979)){
var statearr_34033_35339 = state_33994__$1;
(statearr_34033_35339[(1)] = (36));

} else {
var statearr_34034_35340 = state_33994__$1;
(statearr_34034_35340[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (19))){
var inst_33921 = (state_33994[(7)]);
var inst_33941 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_33921);
var state_33994__$1 = state_33994;
var statearr_34035_35342 = state_33994__$1;
(statearr_34035_35342[(2)] = inst_33941);

(statearr_34035_35342[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (11))){
var inst_33921 = (state_33994[(7)]);
var inst_33925 = (inst_33921 == null);
var inst_33926 = cljs.core.not(inst_33925);
var state_33994__$1 = state_33994;
if(inst_33926){
var statearr_34036_35343 = state_33994__$1;
(statearr_34036_35343[(1)] = (13));

} else {
var statearr_34037_35344 = state_33994__$1;
(statearr_34037_35344[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (9))){
var inst_33896 = (state_33994[(8)]);
var state_33994__$1 = state_33994;
var statearr_34038_35345 = state_33994__$1;
(statearr_34038_35345[(2)] = inst_33896);

(statearr_34038_35345[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (5))){
var state_33994__$1 = state_33994;
var statearr_34039_35346 = state_33994__$1;
(statearr_34039_35346[(2)] = true);

(statearr_34039_35346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (14))){
var state_33994__$1 = state_33994;
var statearr_34040_35347 = state_33994__$1;
(statearr_34040_35347[(2)] = false);

(statearr_34040_35347[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (26))){
var inst_33954 = (state_33994[(9)]);
var inst_33961 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33954);
var state_33994__$1 = state_33994;
var statearr_34041_35348 = state_33994__$1;
(statearr_34041_35348[(2)] = inst_33961);

(statearr_34041_35348[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (16))){
var state_33994__$1 = state_33994;
var statearr_34042_35349 = state_33994__$1;
(statearr_34042_35349[(2)] = true);

(statearr_34042_35349[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (38))){
var inst_33984 = (state_33994[(2)]);
var state_33994__$1 = state_33994;
var statearr_34043_35355 = state_33994__$1;
(statearr_34043_35355[(2)] = inst_33984);

(statearr_34043_35355[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (30))){
var inst_33946 = (state_33994[(13)]);
var inst_33954 = (state_33994[(9)]);
var inst_33945 = (state_33994[(10)]);
var inst_33971 = cljs.core.empty_QMARK_(inst_33945);
var inst_33972 = (inst_33946.cljs$core$IFn$_invoke$arity$1 ? inst_33946.cljs$core$IFn$_invoke$arity$1(inst_33954) : inst_33946.call(null,inst_33954));
var inst_33973 = cljs.core.not(inst_33972);
var inst_33974 = ((inst_33971) && (inst_33973));
var state_33994__$1 = state_33994;
var statearr_34044_35358 = state_33994__$1;
(statearr_34044_35358[(2)] = inst_33974);

(statearr_34044_35358[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (10))){
var inst_33896 = (state_33994[(8)]);
var inst_33917 = (state_33994[(2)]);
var inst_33918 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33917,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33919 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33917,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33920 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33917,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33921 = inst_33896;
var state_33994__$1 = (function (){var statearr_34045 = state_33994;
(statearr_34045[(16)] = inst_33920);

(statearr_34045[(17)] = inst_33918);

(statearr_34045[(7)] = inst_33921);

(statearr_34045[(18)] = inst_33919);

return statearr_34045;
})();
var statearr_34046_35359 = state_33994__$1;
(statearr_34046_35359[(2)] = null);

(statearr_34046_35359[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (18))){
var inst_33936 = (state_33994[(2)]);
var state_33994__$1 = state_33994;
var statearr_34047_35360 = state_33994__$1;
(statearr_34047_35360[(2)] = inst_33936);

(statearr_34047_35360[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (37))){
var state_33994__$1 = state_33994;
var statearr_34048_35361 = state_33994__$1;
(statearr_34048_35361[(2)] = null);

(statearr_34048_35361[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (8))){
var inst_33896 = (state_33994[(8)]);
var inst_33914 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_33896);
var state_33994__$1 = state_33994;
var statearr_34049_35362 = state_33994__$1;
(statearr_34049_35362[(2)] = inst_33914);

(statearr_34049_35362[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33200__auto___35291,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33021__auto__,c__33200__auto___35291,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33022__auto__ = null;
var cljs$core$async$mix_$_state_machine__33022__auto____0 = (function (){
var statearr_34050 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34050[(0)] = cljs$core$async$mix_$_state_machine__33022__auto__);

(statearr_34050[(1)] = (1));

return statearr_34050;
});
var cljs$core$async$mix_$_state_machine__33022__auto____1 = (function (state_33994){
while(true){
var ret_value__33023__auto__ = (function (){try{while(true){
var result__33024__auto__ = switch__33021__auto__(state_33994);
if(cljs.core.keyword_identical_QMARK_(result__33024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33024__auto__;
}
break;
}
}catch (e34051){if((e34051 instanceof Object)){
var ex__33025__auto__ = e34051;
var statearr_34052_35364 = state_33994;
(statearr_34052_35364[(5)] = ex__33025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34051;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35365 = state_33994;
state_33994 = G__35365;
continue;
} else {
return ret_value__33023__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33022__auto__ = function(state_33994){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33022__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33022__auto____1.call(this,state_33994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33022__auto____0;
cljs$core$async$mix_$_state_machine__33022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33022__auto____1;
return cljs$core$async$mix_$_state_machine__33022__auto__;
})()
;})(switch__33021__auto__,c__33200__auto___35291,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33202__auto__ = (function (){var statearr_34053 = (f__33201__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33201__auto__.cljs$core$IFn$_invoke$arity$0() : f__33201__auto__.call(null));
(statearr_34053[(6)] = c__33200__auto___35291);

return statearr_34053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33202__auto__);
});})(c__33200__auto___35291,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34055 = arguments.length;
switch (G__34055) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__34058 = arguments.length;
switch (G__34058) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__34056_SHARP_){
if(cljs.core.truth_((p1__34056_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34056_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__34056_SHARP_.call(null,topic)))){
return p1__34056_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34056_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34059 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34059 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34060){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34060 = meta34060;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34059.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34061,meta34060__$1){
var self__ = this;
var _34061__$1 = this;
return (new cljs.core.async.t_cljs$core$async34059(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34060__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34059.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34061){
var self__ = this;
var _34061__$1 = this;
return self__.meta34060;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34059.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34059.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34059.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34059.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34059.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34059.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34059.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34059.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34060","meta34060",-368236216,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34059.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34059.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34059";

cljs.core.async.t_cljs$core$async34059.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34059");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34059.
 */
cljs.core.async.__GT_t_cljs$core$async34059 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async34059(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34060){
return (new cljs.core.async.t_cljs$core$async34059(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34060));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async34059(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33200__auto___35394 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33200__auto___35394,mults,ensure_mult,p){
return (function (){
var f__33201__auto__ = (function (){var switch__33021__auto__ = ((function (c__33200__auto___35394,mults,ensure_mult,p){
return (function (state_34133){
var state_val_34134 = (state_34133[(1)]);
if((state_val_34134 === (7))){
var inst_34129 = (state_34133[(2)]);
var state_34133__$1 = state_34133;
var statearr_34135_35395 = state_34133__$1;
(statearr_34135_35395[(2)] = inst_34129);

(statearr_34135_35395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (20))){
var state_34133__$1 = state_34133;
var statearr_34136_35396 = state_34133__$1;
(statearr_34136_35396[(2)] = null);

(statearr_34136_35396[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (1))){
var state_34133__$1 = state_34133;
var statearr_34137_35397 = state_34133__$1;
(statearr_34137_35397[(2)] = null);

(statearr_34137_35397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (24))){
var inst_34112 = (state_34133[(7)]);
var inst_34121 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_34112);
var state_34133__$1 = state_34133;
var statearr_34138_35398 = state_34133__$1;
(statearr_34138_35398[(2)] = inst_34121);

(statearr_34138_35398[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (4))){
var inst_34064 = (state_34133[(8)]);
var inst_34064__$1 = (state_34133[(2)]);
var inst_34065 = (inst_34064__$1 == null);
var state_34133__$1 = (function (){var statearr_34139 = state_34133;
(statearr_34139[(8)] = inst_34064__$1);

return statearr_34139;
})();
if(cljs.core.truth_(inst_34065)){
var statearr_34140_35400 = state_34133__$1;
(statearr_34140_35400[(1)] = (5));

} else {
var statearr_34141_35401 = state_34133__$1;
(statearr_34141_35401[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (15))){
var inst_34106 = (state_34133[(2)]);
var state_34133__$1 = state_34133;
var statearr_34142_35402 = state_34133__$1;
(statearr_34142_35402[(2)] = inst_34106);

(statearr_34142_35402[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (21))){
var inst_34126 = (state_34133[(2)]);
var state_34133__$1 = (function (){var statearr_34143 = state_34133;
(statearr_34143[(9)] = inst_34126);

return statearr_34143;
})();
var statearr_34144_35403 = state_34133__$1;
(statearr_34144_35403[(2)] = null);

(statearr_34144_35403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (13))){
var inst_34088 = (state_34133[(10)]);
var inst_34090 = cljs.core.chunked_seq_QMARK_(inst_34088);
var state_34133__$1 = state_34133;
if(inst_34090){
var statearr_34145_35404 = state_34133__$1;
(statearr_34145_35404[(1)] = (16));

} else {
var statearr_34146_35405 = state_34133__$1;
(statearr_34146_35405[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (22))){
var inst_34118 = (state_34133[(2)]);
var state_34133__$1 = state_34133;
if(cljs.core.truth_(inst_34118)){
var statearr_34147_35407 = state_34133__$1;
(statearr_34147_35407[(1)] = (23));

} else {
var statearr_34148_35408 = state_34133__$1;
(statearr_34148_35408[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (6))){
var inst_34064 = (state_34133[(8)]);
var inst_34112 = (state_34133[(7)]);
var inst_34114 = (state_34133[(11)]);
var inst_34112__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_34064) : topic_fn.call(null,inst_34064));
var inst_34113 = cljs.core.deref(mults);
var inst_34114__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34113,inst_34112__$1);
var state_34133__$1 = (function (){var statearr_34149 = state_34133;
(statearr_34149[(7)] = inst_34112__$1);

(statearr_34149[(11)] = inst_34114__$1);

return statearr_34149;
})();
if(cljs.core.truth_(inst_34114__$1)){
var statearr_34150_35409 = state_34133__$1;
(statearr_34150_35409[(1)] = (19));

} else {
var statearr_34151_35410 = state_34133__$1;
(statearr_34151_35410[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (25))){
var inst_34123 = (state_34133[(2)]);
var state_34133__$1 = state_34133;
var statearr_34152_35411 = state_34133__$1;
(statearr_34152_35411[(2)] = inst_34123);

(statearr_34152_35411[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (17))){
var inst_34088 = (state_34133[(10)]);
var inst_34097 = cljs.core.first(inst_34088);
var inst_34098 = cljs.core.async.muxch_STAR_(inst_34097);
var inst_34099 = cljs.core.async.close_BANG_(inst_34098);
var inst_34100 = cljs.core.next(inst_34088);
var inst_34074 = inst_34100;
var inst_34075 = null;
var inst_34076 = (0);
var inst_34077 = (0);
var state_34133__$1 = (function (){var statearr_34153 = state_34133;
(statearr_34153[(12)] = inst_34077);

(statearr_34153[(13)] = inst_34076);

(statearr_34153[(14)] = inst_34075);

(statearr_34153[(15)] = inst_34074);

(statearr_34153[(16)] = inst_34099);

return statearr_34153;
})();
var statearr_34154_35417 = state_34133__$1;
(statearr_34154_35417[(2)] = null);

(statearr_34154_35417[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (3))){
var inst_34131 = (state_34133[(2)]);
var state_34133__$1 = state_34133;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34133__$1,inst_34131);
} else {
if((state_val_34134 === (12))){
var inst_34108 = (state_34133[(2)]);
var state_34133__$1 = state_34133;
var statearr_34155_35418 = state_34133__$1;
(statearr_34155_35418[(2)] = inst_34108);

(statearr_34155_35418[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (2))){
var state_34133__$1 = state_34133;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34133__$1,(4),ch);
} else {
if((state_val_34134 === (23))){
var state_34133__$1 = state_34133;
var statearr_34156_35423 = state_34133__$1;
(statearr_34156_35423[(2)] = null);

(statearr_34156_35423[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (19))){
var inst_34064 = (state_34133[(8)]);
var inst_34114 = (state_34133[(11)]);
var inst_34116 = cljs.core.async.muxch_STAR_(inst_34114);
var state_34133__$1 = state_34133;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34133__$1,(22),inst_34116,inst_34064);
} else {
if((state_val_34134 === (11))){
var inst_34088 = (state_34133[(10)]);
var inst_34074 = (state_34133[(15)]);
var inst_34088__$1 = cljs.core.seq(inst_34074);
var state_34133__$1 = (function (){var statearr_34157 = state_34133;
(statearr_34157[(10)] = inst_34088__$1);

return statearr_34157;
})();
if(inst_34088__$1){
var statearr_34158_35428 = state_34133__$1;
(statearr_34158_35428[(1)] = (13));

} else {
var statearr_34159_35429 = state_34133__$1;
(statearr_34159_35429[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (9))){
var inst_34110 = (state_34133[(2)]);
var state_34133__$1 = state_34133;
var statearr_34160_35431 = state_34133__$1;
(statearr_34160_35431[(2)] = inst_34110);

(statearr_34160_35431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (5))){
var inst_34071 = cljs.core.deref(mults);
var inst_34072 = cljs.core.vals(inst_34071);
var inst_34073 = cljs.core.seq(inst_34072);
var inst_34074 = inst_34073;
var inst_34075 = null;
var inst_34076 = (0);
var inst_34077 = (0);
var state_34133__$1 = (function (){var statearr_34161 = state_34133;
(statearr_34161[(12)] = inst_34077);

(statearr_34161[(13)] = inst_34076);

(statearr_34161[(14)] = inst_34075);

(statearr_34161[(15)] = inst_34074);

return statearr_34161;
})();
var statearr_34162_35435 = state_34133__$1;
(statearr_34162_35435[(2)] = null);

(statearr_34162_35435[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (14))){
var state_34133__$1 = state_34133;
var statearr_34166_35436 = state_34133__$1;
(statearr_34166_35436[(2)] = null);

(statearr_34166_35436[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (16))){
var inst_34088 = (state_34133[(10)]);
var inst_34092 = cljs.core.chunk_first(inst_34088);
var inst_34093 = cljs.core.chunk_rest(inst_34088);
var inst_34094 = cljs.core.count(inst_34092);
var inst_34074 = inst_34093;
var inst_34075 = inst_34092;
var inst_34076 = inst_34094;
var inst_34077 = (0);
var state_34133__$1 = (function (){var statearr_34167 = state_34133;
(statearr_34167[(12)] = inst_34077);

(statearr_34167[(13)] = inst_34076);

(statearr_34167[(14)] = inst_34075);

(statearr_34167[(15)] = inst_34074);

return statearr_34167;
})();
var statearr_34168_35437 = state_34133__$1;
(statearr_34168_35437[(2)] = null);

(statearr_34168_35437[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (10))){
var inst_34077 = (state_34133[(12)]);
var inst_34076 = (state_34133[(13)]);
var inst_34075 = (state_34133[(14)]);
var inst_34074 = (state_34133[(15)]);
var inst_34082 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34075,inst_34077);
var inst_34083 = cljs.core.async.muxch_STAR_(inst_34082);
var inst_34084 = cljs.core.async.close_BANG_(inst_34083);
var inst_34085 = (inst_34077 + (1));
var tmp34163 = inst_34076;
var tmp34164 = inst_34075;
var tmp34165 = inst_34074;
var inst_34074__$1 = tmp34165;
var inst_34075__$1 = tmp34164;
var inst_34076__$1 = tmp34163;
var inst_34077__$1 = inst_34085;
var state_34133__$1 = (function (){var statearr_34169 = state_34133;
(statearr_34169[(12)] = inst_34077__$1);

(statearr_34169[(17)] = inst_34084);

(statearr_34169[(13)] = inst_34076__$1);

(statearr_34169[(14)] = inst_34075__$1);

(statearr_34169[(15)] = inst_34074__$1);

return statearr_34169;
})();
var statearr_34170_35443 = state_34133__$1;
(statearr_34170_35443[(2)] = null);

(statearr_34170_35443[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (18))){
var inst_34103 = (state_34133[(2)]);
var state_34133__$1 = state_34133;
var statearr_34171_35444 = state_34133__$1;
(statearr_34171_35444[(2)] = inst_34103);

(statearr_34171_35444[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (8))){
var inst_34077 = (state_34133[(12)]);
var inst_34076 = (state_34133[(13)]);
var inst_34079 = (inst_34077 < inst_34076);
var inst_34080 = inst_34079;
var state_34133__$1 = state_34133;
if(cljs.core.truth_(inst_34080)){
var statearr_34172_35445 = state_34133__$1;
(statearr_34172_35445[(1)] = (10));

} else {
var statearr_34173_35447 = state_34133__$1;
(statearr_34173_35447[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33200__auto___35394,mults,ensure_mult,p))
;
return ((function (switch__33021__auto__,c__33200__auto___35394,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33022__auto__ = null;
var cljs$core$async$state_machine__33022__auto____0 = (function (){
var statearr_34174 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34174[(0)] = cljs$core$async$state_machine__33022__auto__);

(statearr_34174[(1)] = (1));

return statearr_34174;
});
var cljs$core$async$state_machine__33022__auto____1 = (function (state_34133){
while(true){
var ret_value__33023__auto__ = (function (){try{while(true){
var result__33024__auto__ = switch__33021__auto__(state_34133);
if(cljs.core.keyword_identical_QMARK_(result__33024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33024__auto__;
}
break;
}
}catch (e34175){if((e34175 instanceof Object)){
var ex__33025__auto__ = e34175;
var statearr_34176_35450 = state_34133;
(statearr_34176_35450[(5)] = ex__33025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34175;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35451 = state_34133;
state_34133 = G__35451;
continue;
} else {
return ret_value__33023__auto__;
}
break;
}
});
cljs$core$async$state_machine__33022__auto__ = function(state_34133){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33022__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33022__auto____1.call(this,state_34133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33022__auto____0;
cljs$core$async$state_machine__33022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33022__auto____1;
return cljs$core$async$state_machine__33022__auto__;
})()
;})(switch__33021__auto__,c__33200__auto___35394,mults,ensure_mult,p))
})();
var state__33202__auto__ = (function (){var statearr_34177 = (f__33201__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33201__auto__.cljs$core$IFn$_invoke$arity$0() : f__33201__auto__.call(null));
(statearr_34177[(6)] = c__33200__auto___35394);

return statearr_34177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33202__auto__);
});})(c__33200__auto___35394,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__34179 = arguments.length;
switch (G__34179) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__34181 = arguments.length;
switch (G__34181) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__34183 = arguments.length;
switch (G__34183) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__33200__auto___35472 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33200__auto___35472,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33201__auto__ = (function (){var switch__33021__auto__ = ((function (c__33200__auto___35472,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34222){
var state_val_34223 = (state_34222[(1)]);
if((state_val_34223 === (7))){
var state_34222__$1 = state_34222;
var statearr_34224_35530 = state_34222__$1;
(statearr_34224_35530[(2)] = null);

(statearr_34224_35530[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34223 === (1))){
var state_34222__$1 = state_34222;
var statearr_34225_35531 = state_34222__$1;
(statearr_34225_35531[(2)] = null);

(statearr_34225_35531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34223 === (4))){
var inst_34186 = (state_34222[(7)]);
var inst_34188 = (inst_34186 < cnt);
var state_34222__$1 = state_34222;
if(cljs.core.truth_(inst_34188)){
var statearr_34226_35538 = state_34222__$1;
(statearr_34226_35538[(1)] = (6));

} else {
var statearr_34227_35539 = state_34222__$1;
(statearr_34227_35539[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34223 === (15))){
var inst_34218 = (state_34222[(2)]);
var state_34222__$1 = state_34222;
var statearr_34228_35540 = state_34222__$1;
(statearr_34228_35540[(2)] = inst_34218);

(statearr_34228_35540[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34223 === (13))){
var inst_34211 = cljs.core.async.close_BANG_(out);
var state_34222__$1 = state_34222;
var statearr_34229_35541 = state_34222__$1;
(statearr_34229_35541[(2)] = inst_34211);

(statearr_34229_35541[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34223 === (6))){
var state_34222__$1 = state_34222;
var statearr_34230_35542 = state_34222__$1;
(statearr_34230_35542[(2)] = null);

(statearr_34230_35542[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34223 === (3))){
var inst_34220 = (state_34222[(2)]);
var state_34222__$1 = state_34222;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34222__$1,inst_34220);
} else {
if((state_val_34223 === (12))){
var inst_34208 = (state_34222[(8)]);
var inst_34208__$1 = (state_34222[(2)]);
var inst_34209 = cljs.core.some(cljs.core.nil_QMARK_,inst_34208__$1);
var state_34222__$1 = (function (){var statearr_34231 = state_34222;
(statearr_34231[(8)] = inst_34208__$1);

return statearr_34231;
})();
if(cljs.core.truth_(inst_34209)){
var statearr_34232_35545 = state_34222__$1;
(statearr_34232_35545[(1)] = (13));

} else {
var statearr_34233_35546 = state_34222__$1;
(statearr_34233_35546[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34223 === (2))){
var inst_34185 = cljs.core.reset_BANG_(dctr,cnt);
var inst_34186 = (0);
var state_34222__$1 = (function (){var statearr_34234 = state_34222;
(statearr_34234[(7)] = inst_34186);

(statearr_34234[(9)] = inst_34185);

return statearr_34234;
})();
var statearr_34235_35549 = state_34222__$1;
(statearr_34235_35549[(2)] = null);

(statearr_34235_35549[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34223 === (11))){
var inst_34186 = (state_34222[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_34222,(10),Object,null,(9));
var inst_34195 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_34186) : chs__$1.call(null,inst_34186));
var inst_34196 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_34186) : done.call(null,inst_34186));
var inst_34197 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_34195,inst_34196);
var state_34222__$1 = state_34222;
var statearr_34236_35551 = state_34222__$1;
(statearr_34236_35551[(2)] = inst_34197);


cljs.core.async.impl.ioc_helpers.process_exception(state_34222__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34223 === (9))){
var inst_34186 = (state_34222[(7)]);
var inst_34199 = (state_34222[(2)]);
var inst_34200 = (inst_34186 + (1));
var inst_34186__$1 = inst_34200;
var state_34222__$1 = (function (){var statearr_34237 = state_34222;
(statearr_34237[(10)] = inst_34199);

(statearr_34237[(7)] = inst_34186__$1);

return statearr_34237;
})();
var statearr_34238_35552 = state_34222__$1;
(statearr_34238_35552[(2)] = null);

(statearr_34238_35552[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34223 === (5))){
var inst_34206 = (state_34222[(2)]);
var state_34222__$1 = (function (){var statearr_34239 = state_34222;
(statearr_34239[(11)] = inst_34206);

return statearr_34239;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34222__$1,(12),dchan);
} else {
if((state_val_34223 === (14))){
var inst_34208 = (state_34222[(8)]);
var inst_34213 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_34208);
var state_34222__$1 = state_34222;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34222__$1,(16),out,inst_34213);
} else {
if((state_val_34223 === (16))){
var inst_34215 = (state_34222[(2)]);
var state_34222__$1 = (function (){var statearr_34240 = state_34222;
(statearr_34240[(12)] = inst_34215);

return statearr_34240;
})();
var statearr_34241_35553 = state_34222__$1;
(statearr_34241_35553[(2)] = null);

(statearr_34241_35553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34223 === (10))){
var inst_34190 = (state_34222[(2)]);
var inst_34191 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34222__$1 = (function (){var statearr_34242 = state_34222;
(statearr_34242[(13)] = inst_34190);

return statearr_34242;
})();
var statearr_34243_35554 = state_34222__$1;
(statearr_34243_35554[(2)] = inst_34191);


cljs.core.async.impl.ioc_helpers.process_exception(state_34222__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34223 === (8))){
var inst_34204 = (state_34222[(2)]);
var state_34222__$1 = state_34222;
var statearr_34244_35555 = state_34222__$1;
(statearr_34244_35555[(2)] = inst_34204);

(statearr_34244_35555[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33200__auto___35472,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33021__auto__,c__33200__auto___35472,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33022__auto__ = null;
var cljs$core$async$state_machine__33022__auto____0 = (function (){
var statearr_34245 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34245[(0)] = cljs$core$async$state_machine__33022__auto__);

(statearr_34245[(1)] = (1));

return statearr_34245;
});
var cljs$core$async$state_machine__33022__auto____1 = (function (state_34222){
while(true){
var ret_value__33023__auto__ = (function (){try{while(true){
var result__33024__auto__ = switch__33021__auto__(state_34222);
if(cljs.core.keyword_identical_QMARK_(result__33024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33024__auto__;
}
break;
}
}catch (e34246){if((e34246 instanceof Object)){
var ex__33025__auto__ = e34246;
var statearr_34247_35556 = state_34222;
(statearr_34247_35556[(5)] = ex__33025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34222);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34246;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35557 = state_34222;
state_34222 = G__35557;
continue;
} else {
return ret_value__33023__auto__;
}
break;
}
});
cljs$core$async$state_machine__33022__auto__ = function(state_34222){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33022__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33022__auto____1.call(this,state_34222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33022__auto____0;
cljs$core$async$state_machine__33022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33022__auto____1;
return cljs$core$async$state_machine__33022__auto__;
})()
;})(switch__33021__auto__,c__33200__auto___35472,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33202__auto__ = (function (){var statearr_34248 = (f__33201__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33201__auto__.cljs$core$IFn$_invoke$arity$0() : f__33201__auto__.call(null));
(statearr_34248[(6)] = c__33200__auto___35472);

return statearr_34248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33202__auto__);
});})(c__33200__auto___35472,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__34251 = arguments.length;
switch (G__34251) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33200__auto___35560 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33200__auto___35560,out){
return (function (){
var f__33201__auto__ = (function (){var switch__33021__auto__ = ((function (c__33200__auto___35560,out){
return (function (state_34283){
var state_val_34284 = (state_34283[(1)]);
if((state_val_34284 === (7))){
var inst_34262 = (state_34283[(7)]);
var inst_34263 = (state_34283[(8)]);
var inst_34262__$1 = (state_34283[(2)]);
var inst_34263__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34262__$1,(0),null);
var inst_34264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34262__$1,(1),null);
var inst_34265 = (inst_34263__$1 == null);
var state_34283__$1 = (function (){var statearr_34285 = state_34283;
(statearr_34285[(9)] = inst_34264);

(statearr_34285[(7)] = inst_34262__$1);

(statearr_34285[(8)] = inst_34263__$1);

return statearr_34285;
})();
if(cljs.core.truth_(inst_34265)){
var statearr_34286_35562 = state_34283__$1;
(statearr_34286_35562[(1)] = (8));

} else {
var statearr_34287_35563 = state_34283__$1;
(statearr_34287_35563[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34284 === (1))){
var inst_34252 = cljs.core.vec(chs);
var inst_34253 = inst_34252;
var state_34283__$1 = (function (){var statearr_34288 = state_34283;
(statearr_34288[(10)] = inst_34253);

return statearr_34288;
})();
var statearr_34289_35565 = state_34283__$1;
(statearr_34289_35565[(2)] = null);

(statearr_34289_35565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34284 === (4))){
var inst_34253 = (state_34283[(10)]);
var state_34283__$1 = state_34283;
return cljs.core.async.ioc_alts_BANG_(state_34283__$1,(7),inst_34253);
} else {
if((state_val_34284 === (6))){
var inst_34279 = (state_34283[(2)]);
var state_34283__$1 = state_34283;
var statearr_34290_35567 = state_34283__$1;
(statearr_34290_35567[(2)] = inst_34279);

(statearr_34290_35567[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34284 === (3))){
var inst_34281 = (state_34283[(2)]);
var state_34283__$1 = state_34283;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34283__$1,inst_34281);
} else {
if((state_val_34284 === (2))){
var inst_34253 = (state_34283[(10)]);
var inst_34255 = cljs.core.count(inst_34253);
var inst_34256 = (inst_34255 > (0));
var state_34283__$1 = state_34283;
if(cljs.core.truth_(inst_34256)){
var statearr_34292_35568 = state_34283__$1;
(statearr_34292_35568[(1)] = (4));

} else {
var statearr_34293_35569 = state_34283__$1;
(statearr_34293_35569[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34284 === (11))){
var inst_34253 = (state_34283[(10)]);
var inst_34272 = (state_34283[(2)]);
var tmp34291 = inst_34253;
var inst_34253__$1 = tmp34291;
var state_34283__$1 = (function (){var statearr_34294 = state_34283;
(statearr_34294[(11)] = inst_34272);

(statearr_34294[(10)] = inst_34253__$1);

return statearr_34294;
})();
var statearr_34295_35571 = state_34283__$1;
(statearr_34295_35571[(2)] = null);

(statearr_34295_35571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34284 === (9))){
var inst_34263 = (state_34283[(8)]);
var state_34283__$1 = state_34283;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34283__$1,(11),out,inst_34263);
} else {
if((state_val_34284 === (5))){
var inst_34277 = cljs.core.async.close_BANG_(out);
var state_34283__$1 = state_34283;
var statearr_34296_35572 = state_34283__$1;
(statearr_34296_35572[(2)] = inst_34277);

(statearr_34296_35572[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34284 === (10))){
var inst_34275 = (state_34283[(2)]);
var state_34283__$1 = state_34283;
var statearr_34297_35573 = state_34283__$1;
(statearr_34297_35573[(2)] = inst_34275);

(statearr_34297_35573[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34284 === (8))){
var inst_34264 = (state_34283[(9)]);
var inst_34253 = (state_34283[(10)]);
var inst_34262 = (state_34283[(7)]);
var inst_34263 = (state_34283[(8)]);
var inst_34267 = (function (){var cs = inst_34253;
var vec__34258 = inst_34262;
var v = inst_34263;
var c = inst_34264;
return ((function (cs,vec__34258,v,c,inst_34264,inst_34253,inst_34262,inst_34263,state_val_34284,c__33200__auto___35560,out){
return (function (p1__34249_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34249_SHARP_);
});
;})(cs,vec__34258,v,c,inst_34264,inst_34253,inst_34262,inst_34263,state_val_34284,c__33200__auto___35560,out))
})();
var inst_34268 = cljs.core.filterv(inst_34267,inst_34253);
var inst_34253__$1 = inst_34268;
var state_34283__$1 = (function (){var statearr_34298 = state_34283;
(statearr_34298[(10)] = inst_34253__$1);

return statearr_34298;
})();
var statearr_34299_35575 = state_34283__$1;
(statearr_34299_35575[(2)] = null);

(statearr_34299_35575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33200__auto___35560,out))
;
return ((function (switch__33021__auto__,c__33200__auto___35560,out){
return (function() {
var cljs$core$async$state_machine__33022__auto__ = null;
var cljs$core$async$state_machine__33022__auto____0 = (function (){
var statearr_34300 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34300[(0)] = cljs$core$async$state_machine__33022__auto__);

(statearr_34300[(1)] = (1));

return statearr_34300;
});
var cljs$core$async$state_machine__33022__auto____1 = (function (state_34283){
while(true){
var ret_value__33023__auto__ = (function (){try{while(true){
var result__33024__auto__ = switch__33021__auto__(state_34283);
if(cljs.core.keyword_identical_QMARK_(result__33024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33024__auto__;
}
break;
}
}catch (e34301){if((e34301 instanceof Object)){
var ex__33025__auto__ = e34301;
var statearr_34302_35576 = state_34283;
(statearr_34302_35576[(5)] = ex__33025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34301;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35577 = state_34283;
state_34283 = G__35577;
continue;
} else {
return ret_value__33023__auto__;
}
break;
}
});
cljs$core$async$state_machine__33022__auto__ = function(state_34283){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33022__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33022__auto____1.call(this,state_34283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33022__auto____0;
cljs$core$async$state_machine__33022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33022__auto____1;
return cljs$core$async$state_machine__33022__auto__;
})()
;})(switch__33021__auto__,c__33200__auto___35560,out))
})();
var state__33202__auto__ = (function (){var statearr_34303 = (f__33201__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33201__auto__.cljs$core$IFn$_invoke$arity$0() : f__33201__auto__.call(null));
(statearr_34303[(6)] = c__33200__auto___35560);

return statearr_34303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33202__auto__);
});})(c__33200__auto___35560,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__34305 = arguments.length;
switch (G__34305) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33200__auto___35591 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33200__auto___35591,out){
return (function (){
var f__33201__auto__ = (function (){var switch__33021__auto__ = ((function (c__33200__auto___35591,out){
return (function (state_34329){
var state_val_34330 = (state_34329[(1)]);
if((state_val_34330 === (7))){
var inst_34311 = (state_34329[(7)]);
var inst_34311__$1 = (state_34329[(2)]);
var inst_34312 = (inst_34311__$1 == null);
var inst_34313 = cljs.core.not(inst_34312);
var state_34329__$1 = (function (){var statearr_34331 = state_34329;
(statearr_34331[(7)] = inst_34311__$1);

return statearr_34331;
})();
if(inst_34313){
var statearr_34332_35596 = state_34329__$1;
(statearr_34332_35596[(1)] = (8));

} else {
var statearr_34333_35597 = state_34329__$1;
(statearr_34333_35597[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34330 === (1))){
var inst_34306 = (0);
var state_34329__$1 = (function (){var statearr_34334 = state_34329;
(statearr_34334[(8)] = inst_34306);

return statearr_34334;
})();
var statearr_34335_35603 = state_34329__$1;
(statearr_34335_35603[(2)] = null);

(statearr_34335_35603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34330 === (4))){
var state_34329__$1 = state_34329;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34329__$1,(7),ch);
} else {
if((state_val_34330 === (6))){
var inst_34324 = (state_34329[(2)]);
var state_34329__$1 = state_34329;
var statearr_34336_35604 = state_34329__$1;
(statearr_34336_35604[(2)] = inst_34324);

(statearr_34336_35604[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34330 === (3))){
var inst_34326 = (state_34329[(2)]);
var inst_34327 = cljs.core.async.close_BANG_(out);
var state_34329__$1 = (function (){var statearr_34337 = state_34329;
(statearr_34337[(9)] = inst_34326);

return statearr_34337;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34329__$1,inst_34327);
} else {
if((state_val_34330 === (2))){
var inst_34306 = (state_34329[(8)]);
var inst_34308 = (inst_34306 < n);
var state_34329__$1 = state_34329;
if(cljs.core.truth_(inst_34308)){
var statearr_34338_35605 = state_34329__$1;
(statearr_34338_35605[(1)] = (4));

} else {
var statearr_34339_35606 = state_34329__$1;
(statearr_34339_35606[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34330 === (11))){
var inst_34306 = (state_34329[(8)]);
var inst_34316 = (state_34329[(2)]);
var inst_34317 = (inst_34306 + (1));
var inst_34306__$1 = inst_34317;
var state_34329__$1 = (function (){var statearr_34340 = state_34329;
(statearr_34340[(8)] = inst_34306__$1);

(statearr_34340[(10)] = inst_34316);

return statearr_34340;
})();
var statearr_34341_35607 = state_34329__$1;
(statearr_34341_35607[(2)] = null);

(statearr_34341_35607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34330 === (9))){
var state_34329__$1 = state_34329;
var statearr_34342_35608 = state_34329__$1;
(statearr_34342_35608[(2)] = null);

(statearr_34342_35608[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34330 === (5))){
var state_34329__$1 = state_34329;
var statearr_34343_35609 = state_34329__$1;
(statearr_34343_35609[(2)] = null);

(statearr_34343_35609[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34330 === (10))){
var inst_34321 = (state_34329[(2)]);
var state_34329__$1 = state_34329;
var statearr_34344_35614 = state_34329__$1;
(statearr_34344_35614[(2)] = inst_34321);

(statearr_34344_35614[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34330 === (8))){
var inst_34311 = (state_34329[(7)]);
var state_34329__$1 = state_34329;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34329__$1,(11),out,inst_34311);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33200__auto___35591,out))
;
return ((function (switch__33021__auto__,c__33200__auto___35591,out){
return (function() {
var cljs$core$async$state_machine__33022__auto__ = null;
var cljs$core$async$state_machine__33022__auto____0 = (function (){
var statearr_34345 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34345[(0)] = cljs$core$async$state_machine__33022__auto__);

(statearr_34345[(1)] = (1));

return statearr_34345;
});
var cljs$core$async$state_machine__33022__auto____1 = (function (state_34329){
while(true){
var ret_value__33023__auto__ = (function (){try{while(true){
var result__33024__auto__ = switch__33021__auto__(state_34329);
if(cljs.core.keyword_identical_QMARK_(result__33024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33024__auto__;
}
break;
}
}catch (e34346){if((e34346 instanceof Object)){
var ex__33025__auto__ = e34346;
var statearr_34347_35623 = state_34329;
(statearr_34347_35623[(5)] = ex__33025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34346;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35624 = state_34329;
state_34329 = G__35624;
continue;
} else {
return ret_value__33023__auto__;
}
break;
}
});
cljs$core$async$state_machine__33022__auto__ = function(state_34329){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33022__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33022__auto____1.call(this,state_34329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33022__auto____0;
cljs$core$async$state_machine__33022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33022__auto____1;
return cljs$core$async$state_machine__33022__auto__;
})()
;})(switch__33021__auto__,c__33200__auto___35591,out))
})();
var state__33202__auto__ = (function (){var statearr_34348 = (f__33201__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33201__auto__.cljs$core$IFn$_invoke$arity$0() : f__33201__auto__.call(null));
(statearr_34348[(6)] = c__33200__auto___35591);

return statearr_34348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33202__auto__);
});})(c__33200__auto___35591,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34350 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34350 = (function (f,ch,meta34351){
this.f = f;
this.ch = ch;
this.meta34351 = meta34351;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34352,meta34351__$1){
var self__ = this;
var _34352__$1 = this;
return (new cljs.core.async.t_cljs$core$async34350(self__.f,self__.ch,meta34351__$1));
});

cljs.core.async.t_cljs$core$async34350.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34352){
var self__ = this;
var _34352__$1 = this;
return self__.meta34351;
});

cljs.core.async.t_cljs$core$async34350.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34350.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async34350.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async34350.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34350.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34353 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34353 = (function (f,ch,meta34351,_,fn1,meta34354){
this.f = f;
this.ch = ch;
this.meta34351 = meta34351;
this._ = _;
this.fn1 = fn1;
this.meta34354 = meta34354;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34355,meta34354__$1){
var self__ = this;
var _34355__$1 = this;
return (new cljs.core.async.t_cljs$core$async34353(self__.f,self__.ch,self__.meta34351,self__._,self__.fn1,meta34354__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34353.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34355){
var self__ = this;
var _34355__$1 = this;
return self__.meta34354;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34353.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34353.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34353.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34353.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34349_SHARP_){
var G__34356 = (((p1__34349_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34349_SHARP_) : self__.f.call(null,p1__34349_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34356) : f1.call(null,G__34356));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34353.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34351","meta34351",-207253899,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34350","cljs.core.async/t_cljs$core$async34350",1521186436,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34354","meta34354",373622051,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34353.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34353.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34353";

cljs.core.async.t_cljs$core$async34353.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34353");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34353.
 */
cljs.core.async.__GT_t_cljs$core$async34353 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34353(f__$1,ch__$1,meta34351__$1,___$2,fn1__$1,meta34354){
return (new cljs.core.async.t_cljs$core$async34353(f__$1,ch__$1,meta34351__$1,___$2,fn1__$1,meta34354));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34353(self__.f,self__.ch,self__.meta34351,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34357 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34357) : self__.f.call(null,G__34357));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async34350.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34350.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34350.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34351","meta34351",-207253899,null)], null);
});

cljs.core.async.t_cljs$core$async34350.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34350.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34350";

cljs.core.async.t_cljs$core$async34350.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34350");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34350.
 */
cljs.core.async.__GT_t_cljs$core$async34350 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34350(f__$1,ch__$1,meta34351){
return (new cljs.core.async.t_cljs$core$async34350(f__$1,ch__$1,meta34351));
});

}

return (new cljs.core.async.t_cljs$core$async34350(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34358 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34358 = (function (f,ch,meta34359){
this.f = f;
this.ch = ch;
this.meta34359 = meta34359;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34358.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34360,meta34359__$1){
var self__ = this;
var _34360__$1 = this;
return (new cljs.core.async.t_cljs$core$async34358(self__.f,self__.ch,meta34359__$1));
});

cljs.core.async.t_cljs$core$async34358.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34360){
var self__ = this;
var _34360__$1 = this;
return self__.meta34359;
});

cljs.core.async.t_cljs$core$async34358.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34358.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async34358.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34358.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34358.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34358.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async34358.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34359","meta34359",932037391,null)], null);
});

cljs.core.async.t_cljs$core$async34358.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34358.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34358";

cljs.core.async.t_cljs$core$async34358.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34358");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34358.
 */
cljs.core.async.__GT_t_cljs$core$async34358 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34358(f__$1,ch__$1,meta34359){
return (new cljs.core.async.t_cljs$core$async34358(f__$1,ch__$1,meta34359));
});

}

return (new cljs.core.async.t_cljs$core$async34358(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34361 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34361 = (function (p,ch,meta34362){
this.p = p;
this.ch = ch;
this.meta34362 = meta34362;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34363,meta34362__$1){
var self__ = this;
var _34363__$1 = this;
return (new cljs.core.async.t_cljs$core$async34361(self__.p,self__.ch,meta34362__$1));
});

cljs.core.async.t_cljs$core$async34361.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34363){
var self__ = this;
var _34363__$1 = this;
return self__.meta34362;
});

cljs.core.async.t_cljs$core$async34361.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34361.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async34361.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async34361.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34361.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34361.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34361.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34361.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34362","meta34362",-1936448393,null)], null);
});

cljs.core.async.t_cljs$core$async34361.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34361.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34361";

cljs.core.async.t_cljs$core$async34361.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34361");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34361.
 */
cljs.core.async.__GT_t_cljs$core$async34361 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34361(p__$1,ch__$1,meta34362){
return (new cljs.core.async.t_cljs$core$async34361(p__$1,ch__$1,meta34362));
});

}

return (new cljs.core.async.t_cljs$core$async34361(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34365 = arguments.length;
switch (G__34365) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33200__auto___35665 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33200__auto___35665,out){
return (function (){
var f__33201__auto__ = (function (){var switch__33021__auto__ = ((function (c__33200__auto___35665,out){
return (function (state_34386){
var state_val_34387 = (state_34386[(1)]);
if((state_val_34387 === (7))){
var inst_34382 = (state_34386[(2)]);
var state_34386__$1 = state_34386;
var statearr_34388_35671 = state_34386__$1;
(statearr_34388_35671[(2)] = inst_34382);

(statearr_34388_35671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (1))){
var state_34386__$1 = state_34386;
var statearr_34389_35678 = state_34386__$1;
(statearr_34389_35678[(2)] = null);

(statearr_34389_35678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (4))){
var inst_34368 = (state_34386[(7)]);
var inst_34368__$1 = (state_34386[(2)]);
var inst_34369 = (inst_34368__$1 == null);
var state_34386__$1 = (function (){var statearr_34390 = state_34386;
(statearr_34390[(7)] = inst_34368__$1);

return statearr_34390;
})();
if(cljs.core.truth_(inst_34369)){
var statearr_34391_35690 = state_34386__$1;
(statearr_34391_35690[(1)] = (5));

} else {
var statearr_34392_35691 = state_34386__$1;
(statearr_34392_35691[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (6))){
var inst_34368 = (state_34386[(7)]);
var inst_34373 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34368) : p.call(null,inst_34368));
var state_34386__$1 = state_34386;
if(cljs.core.truth_(inst_34373)){
var statearr_34393_35700 = state_34386__$1;
(statearr_34393_35700[(1)] = (8));

} else {
var statearr_34394_35703 = state_34386__$1;
(statearr_34394_35703[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (3))){
var inst_34384 = (state_34386[(2)]);
var state_34386__$1 = state_34386;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34386__$1,inst_34384);
} else {
if((state_val_34387 === (2))){
var state_34386__$1 = state_34386;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34386__$1,(4),ch);
} else {
if((state_val_34387 === (11))){
var inst_34376 = (state_34386[(2)]);
var state_34386__$1 = state_34386;
var statearr_34395_35714 = state_34386__$1;
(statearr_34395_35714[(2)] = inst_34376);

(statearr_34395_35714[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (9))){
var state_34386__$1 = state_34386;
var statearr_34396_35720 = state_34386__$1;
(statearr_34396_35720[(2)] = null);

(statearr_34396_35720[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (5))){
var inst_34371 = cljs.core.async.close_BANG_(out);
var state_34386__$1 = state_34386;
var statearr_34397_35727 = state_34386__$1;
(statearr_34397_35727[(2)] = inst_34371);

(statearr_34397_35727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (10))){
var inst_34379 = (state_34386[(2)]);
var state_34386__$1 = (function (){var statearr_34398 = state_34386;
(statearr_34398[(8)] = inst_34379);

return statearr_34398;
})();
var statearr_34399_35736 = state_34386__$1;
(statearr_34399_35736[(2)] = null);

(statearr_34399_35736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (8))){
var inst_34368 = (state_34386[(7)]);
var state_34386__$1 = state_34386;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34386__$1,(11),out,inst_34368);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33200__auto___35665,out))
;
return ((function (switch__33021__auto__,c__33200__auto___35665,out){
return (function() {
var cljs$core$async$state_machine__33022__auto__ = null;
var cljs$core$async$state_machine__33022__auto____0 = (function (){
var statearr_34400 = [null,null,null,null,null,null,null,null,null];
(statearr_34400[(0)] = cljs$core$async$state_machine__33022__auto__);

(statearr_34400[(1)] = (1));

return statearr_34400;
});
var cljs$core$async$state_machine__33022__auto____1 = (function (state_34386){
while(true){
var ret_value__33023__auto__ = (function (){try{while(true){
var result__33024__auto__ = switch__33021__auto__(state_34386);
if(cljs.core.keyword_identical_QMARK_(result__33024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33024__auto__;
}
break;
}
}catch (e34401){if((e34401 instanceof Object)){
var ex__33025__auto__ = e34401;
var statearr_34402_35761 = state_34386;
(statearr_34402_35761[(5)] = ex__33025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34401;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35762 = state_34386;
state_34386 = G__35762;
continue;
} else {
return ret_value__33023__auto__;
}
break;
}
});
cljs$core$async$state_machine__33022__auto__ = function(state_34386){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33022__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33022__auto____1.call(this,state_34386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33022__auto____0;
cljs$core$async$state_machine__33022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33022__auto____1;
return cljs$core$async$state_machine__33022__auto__;
})()
;})(switch__33021__auto__,c__33200__auto___35665,out))
})();
var state__33202__auto__ = (function (){var statearr_34403 = (f__33201__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33201__auto__.cljs$core$IFn$_invoke$arity$0() : f__33201__auto__.call(null));
(statearr_34403[(6)] = c__33200__auto___35665);

return statearr_34403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33202__auto__);
});})(c__33200__auto___35665,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34405 = arguments.length;
switch (G__34405) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33200__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33200__auto__){
return (function (){
var f__33201__auto__ = (function (){var switch__33021__auto__ = ((function (c__33200__auto__){
return (function (state_34467){
var state_val_34468 = (state_34467[(1)]);
if((state_val_34468 === (7))){
var inst_34463 = (state_34467[(2)]);
var state_34467__$1 = state_34467;
var statearr_34469_35771 = state_34467__$1;
(statearr_34469_35771[(2)] = inst_34463);

(statearr_34469_35771[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (20))){
var inst_34433 = (state_34467[(7)]);
var inst_34444 = (state_34467[(2)]);
var inst_34445 = cljs.core.next(inst_34433);
var inst_34419 = inst_34445;
var inst_34420 = null;
var inst_34421 = (0);
var inst_34422 = (0);
var state_34467__$1 = (function (){var statearr_34470 = state_34467;
(statearr_34470[(8)] = inst_34422);

(statearr_34470[(9)] = inst_34421);

(statearr_34470[(10)] = inst_34420);

(statearr_34470[(11)] = inst_34444);

(statearr_34470[(12)] = inst_34419);

return statearr_34470;
})();
var statearr_34471_35780 = state_34467__$1;
(statearr_34471_35780[(2)] = null);

(statearr_34471_35780[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (1))){
var state_34467__$1 = state_34467;
var statearr_34472_35786 = state_34467__$1;
(statearr_34472_35786[(2)] = null);

(statearr_34472_35786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (4))){
var inst_34408 = (state_34467[(13)]);
var inst_34408__$1 = (state_34467[(2)]);
var inst_34409 = (inst_34408__$1 == null);
var state_34467__$1 = (function (){var statearr_34473 = state_34467;
(statearr_34473[(13)] = inst_34408__$1);

return statearr_34473;
})();
if(cljs.core.truth_(inst_34409)){
var statearr_34474_35787 = state_34467__$1;
(statearr_34474_35787[(1)] = (5));

} else {
var statearr_34475_35788 = state_34467__$1;
(statearr_34475_35788[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (15))){
var state_34467__$1 = state_34467;
var statearr_34479_35790 = state_34467__$1;
(statearr_34479_35790[(2)] = null);

(statearr_34479_35790[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (21))){
var state_34467__$1 = state_34467;
var statearr_34480_35791 = state_34467__$1;
(statearr_34480_35791[(2)] = null);

(statearr_34480_35791[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (13))){
var inst_34422 = (state_34467[(8)]);
var inst_34421 = (state_34467[(9)]);
var inst_34420 = (state_34467[(10)]);
var inst_34419 = (state_34467[(12)]);
var inst_34429 = (state_34467[(2)]);
var inst_34430 = (inst_34422 + (1));
var tmp34476 = inst_34421;
var tmp34477 = inst_34420;
var tmp34478 = inst_34419;
var inst_34419__$1 = tmp34478;
var inst_34420__$1 = tmp34477;
var inst_34421__$1 = tmp34476;
var inst_34422__$1 = inst_34430;
var state_34467__$1 = (function (){var statearr_34481 = state_34467;
(statearr_34481[(8)] = inst_34422__$1);

(statearr_34481[(9)] = inst_34421__$1);

(statearr_34481[(10)] = inst_34420__$1);

(statearr_34481[(14)] = inst_34429);

(statearr_34481[(12)] = inst_34419__$1);

return statearr_34481;
})();
var statearr_34482_35793 = state_34467__$1;
(statearr_34482_35793[(2)] = null);

(statearr_34482_35793[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (22))){
var state_34467__$1 = state_34467;
var statearr_34483_35794 = state_34467__$1;
(statearr_34483_35794[(2)] = null);

(statearr_34483_35794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (6))){
var inst_34408 = (state_34467[(13)]);
var inst_34417 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34408) : f.call(null,inst_34408));
var inst_34418 = cljs.core.seq(inst_34417);
var inst_34419 = inst_34418;
var inst_34420 = null;
var inst_34421 = (0);
var inst_34422 = (0);
var state_34467__$1 = (function (){var statearr_34484 = state_34467;
(statearr_34484[(8)] = inst_34422);

(statearr_34484[(9)] = inst_34421);

(statearr_34484[(10)] = inst_34420);

(statearr_34484[(12)] = inst_34419);

return statearr_34484;
})();
var statearr_34485_35795 = state_34467__$1;
(statearr_34485_35795[(2)] = null);

(statearr_34485_35795[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (17))){
var inst_34433 = (state_34467[(7)]);
var inst_34437 = cljs.core.chunk_first(inst_34433);
var inst_34438 = cljs.core.chunk_rest(inst_34433);
var inst_34439 = cljs.core.count(inst_34437);
var inst_34419 = inst_34438;
var inst_34420 = inst_34437;
var inst_34421 = inst_34439;
var inst_34422 = (0);
var state_34467__$1 = (function (){var statearr_34486 = state_34467;
(statearr_34486[(8)] = inst_34422);

(statearr_34486[(9)] = inst_34421);

(statearr_34486[(10)] = inst_34420);

(statearr_34486[(12)] = inst_34419);

return statearr_34486;
})();
var statearr_34487_35801 = state_34467__$1;
(statearr_34487_35801[(2)] = null);

(statearr_34487_35801[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (3))){
var inst_34465 = (state_34467[(2)]);
var state_34467__$1 = state_34467;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34467__$1,inst_34465);
} else {
if((state_val_34468 === (12))){
var inst_34453 = (state_34467[(2)]);
var state_34467__$1 = state_34467;
var statearr_34488_35807 = state_34467__$1;
(statearr_34488_35807[(2)] = inst_34453);

(statearr_34488_35807[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (2))){
var state_34467__$1 = state_34467;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34467__$1,(4),in$);
} else {
if((state_val_34468 === (23))){
var inst_34461 = (state_34467[(2)]);
var state_34467__$1 = state_34467;
var statearr_34489_35814 = state_34467__$1;
(statearr_34489_35814[(2)] = inst_34461);

(statearr_34489_35814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (19))){
var inst_34448 = (state_34467[(2)]);
var state_34467__$1 = state_34467;
var statearr_34490_35821 = state_34467__$1;
(statearr_34490_35821[(2)] = inst_34448);

(statearr_34490_35821[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (11))){
var inst_34433 = (state_34467[(7)]);
var inst_34419 = (state_34467[(12)]);
var inst_34433__$1 = cljs.core.seq(inst_34419);
var state_34467__$1 = (function (){var statearr_34491 = state_34467;
(statearr_34491[(7)] = inst_34433__$1);

return statearr_34491;
})();
if(inst_34433__$1){
var statearr_34492_35832 = state_34467__$1;
(statearr_34492_35832[(1)] = (14));

} else {
var statearr_34493_35833 = state_34467__$1;
(statearr_34493_35833[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (9))){
var inst_34455 = (state_34467[(2)]);
var inst_34456 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34467__$1 = (function (){var statearr_34494 = state_34467;
(statearr_34494[(15)] = inst_34455);

return statearr_34494;
})();
if(cljs.core.truth_(inst_34456)){
var statearr_34495_35834 = state_34467__$1;
(statearr_34495_35834[(1)] = (21));

} else {
var statearr_34496_35835 = state_34467__$1;
(statearr_34496_35835[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (5))){
var inst_34411 = cljs.core.async.close_BANG_(out);
var state_34467__$1 = state_34467;
var statearr_34497_35843 = state_34467__$1;
(statearr_34497_35843[(2)] = inst_34411);

(statearr_34497_35843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (14))){
var inst_34433 = (state_34467[(7)]);
var inst_34435 = cljs.core.chunked_seq_QMARK_(inst_34433);
var state_34467__$1 = state_34467;
if(inst_34435){
var statearr_34498_35848 = state_34467__$1;
(statearr_34498_35848[(1)] = (17));

} else {
var statearr_34499_35850 = state_34467__$1;
(statearr_34499_35850[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (16))){
var inst_34451 = (state_34467[(2)]);
var state_34467__$1 = state_34467;
var statearr_34500_35857 = state_34467__$1;
(statearr_34500_35857[(2)] = inst_34451);

(statearr_34500_35857[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (10))){
var inst_34422 = (state_34467[(8)]);
var inst_34420 = (state_34467[(10)]);
var inst_34427 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34420,inst_34422);
var state_34467__$1 = state_34467;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34467__$1,(13),out,inst_34427);
} else {
if((state_val_34468 === (18))){
var inst_34433 = (state_34467[(7)]);
var inst_34442 = cljs.core.first(inst_34433);
var state_34467__$1 = state_34467;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34467__$1,(20),out,inst_34442);
} else {
if((state_val_34468 === (8))){
var inst_34422 = (state_34467[(8)]);
var inst_34421 = (state_34467[(9)]);
var inst_34424 = (inst_34422 < inst_34421);
var inst_34425 = inst_34424;
var state_34467__$1 = state_34467;
if(cljs.core.truth_(inst_34425)){
var statearr_34501_35867 = state_34467__$1;
(statearr_34501_35867[(1)] = (10));

} else {
var statearr_34502_35868 = state_34467__$1;
(statearr_34502_35868[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33200__auto__))
;
return ((function (switch__33021__auto__,c__33200__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33022__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33022__auto____0 = (function (){
var statearr_34503 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34503[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33022__auto__);

(statearr_34503[(1)] = (1));

return statearr_34503;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33022__auto____1 = (function (state_34467){
while(true){
var ret_value__33023__auto__ = (function (){try{while(true){
var result__33024__auto__ = switch__33021__auto__(state_34467);
if(cljs.core.keyword_identical_QMARK_(result__33024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33024__auto__;
}
break;
}
}catch (e34504){if((e34504 instanceof Object)){
var ex__33025__auto__ = e34504;
var statearr_34505_35874 = state_34467;
(statearr_34505_35874[(5)] = ex__33025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34504;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35875 = state_34467;
state_34467 = G__35875;
continue;
} else {
return ret_value__33023__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33022__auto__ = function(state_34467){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33022__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33022__auto____1.call(this,state_34467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33022__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33022__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33022__auto__;
})()
;})(switch__33021__auto__,c__33200__auto__))
})();
var state__33202__auto__ = (function (){var statearr_34506 = (f__33201__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33201__auto__.cljs$core$IFn$_invoke$arity$0() : f__33201__auto__.call(null));
(statearr_34506[(6)] = c__33200__auto__);

return statearr_34506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33202__auto__);
});})(c__33200__auto__))
);

return c__33200__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34508 = arguments.length;
switch (G__34508) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34510 = arguments.length;
switch (G__34510) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34512 = arguments.length;
switch (G__34512) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33200__auto___35894 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33200__auto___35894,out){
return (function (){
var f__33201__auto__ = (function (){var switch__33021__auto__ = ((function (c__33200__auto___35894,out){
return (function (state_34536){
var state_val_34537 = (state_34536[(1)]);
if((state_val_34537 === (7))){
var inst_34531 = (state_34536[(2)]);
var state_34536__$1 = state_34536;
var statearr_34538_35895 = state_34536__$1;
(statearr_34538_35895[(2)] = inst_34531);

(statearr_34538_35895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34537 === (1))){
var inst_34513 = null;
var state_34536__$1 = (function (){var statearr_34539 = state_34536;
(statearr_34539[(7)] = inst_34513);

return statearr_34539;
})();
var statearr_34540_35897 = state_34536__$1;
(statearr_34540_35897[(2)] = null);

(statearr_34540_35897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34537 === (4))){
var inst_34516 = (state_34536[(8)]);
var inst_34516__$1 = (state_34536[(2)]);
var inst_34517 = (inst_34516__$1 == null);
var inst_34518 = cljs.core.not(inst_34517);
var state_34536__$1 = (function (){var statearr_34541 = state_34536;
(statearr_34541[(8)] = inst_34516__$1);

return statearr_34541;
})();
if(inst_34518){
var statearr_34542_35898 = state_34536__$1;
(statearr_34542_35898[(1)] = (5));

} else {
var statearr_34543_35899 = state_34536__$1;
(statearr_34543_35899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34537 === (6))){
var state_34536__$1 = state_34536;
var statearr_34544_35900 = state_34536__$1;
(statearr_34544_35900[(2)] = null);

(statearr_34544_35900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34537 === (3))){
var inst_34533 = (state_34536[(2)]);
var inst_34534 = cljs.core.async.close_BANG_(out);
var state_34536__$1 = (function (){var statearr_34545 = state_34536;
(statearr_34545[(9)] = inst_34533);

return statearr_34545;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34536__$1,inst_34534);
} else {
if((state_val_34537 === (2))){
var state_34536__$1 = state_34536;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34536__$1,(4),ch);
} else {
if((state_val_34537 === (11))){
var inst_34516 = (state_34536[(8)]);
var inst_34525 = (state_34536[(2)]);
var inst_34513 = inst_34516;
var state_34536__$1 = (function (){var statearr_34546 = state_34536;
(statearr_34546[(7)] = inst_34513);

(statearr_34546[(10)] = inst_34525);

return statearr_34546;
})();
var statearr_34547_35901 = state_34536__$1;
(statearr_34547_35901[(2)] = null);

(statearr_34547_35901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34537 === (9))){
var inst_34516 = (state_34536[(8)]);
var state_34536__$1 = state_34536;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34536__$1,(11),out,inst_34516);
} else {
if((state_val_34537 === (5))){
var inst_34513 = (state_34536[(7)]);
var inst_34516 = (state_34536[(8)]);
var inst_34520 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34516,inst_34513);
var state_34536__$1 = state_34536;
if(inst_34520){
var statearr_34549_35902 = state_34536__$1;
(statearr_34549_35902[(1)] = (8));

} else {
var statearr_34550_35903 = state_34536__$1;
(statearr_34550_35903[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34537 === (10))){
var inst_34528 = (state_34536[(2)]);
var state_34536__$1 = state_34536;
var statearr_34551_35904 = state_34536__$1;
(statearr_34551_35904[(2)] = inst_34528);

(statearr_34551_35904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34537 === (8))){
var inst_34513 = (state_34536[(7)]);
var tmp34548 = inst_34513;
var inst_34513__$1 = tmp34548;
var state_34536__$1 = (function (){var statearr_34552 = state_34536;
(statearr_34552[(7)] = inst_34513__$1);

return statearr_34552;
})();
var statearr_34553_35908 = state_34536__$1;
(statearr_34553_35908[(2)] = null);

(statearr_34553_35908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33200__auto___35894,out))
;
return ((function (switch__33021__auto__,c__33200__auto___35894,out){
return (function() {
var cljs$core$async$state_machine__33022__auto__ = null;
var cljs$core$async$state_machine__33022__auto____0 = (function (){
var statearr_34554 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34554[(0)] = cljs$core$async$state_machine__33022__auto__);

(statearr_34554[(1)] = (1));

return statearr_34554;
});
var cljs$core$async$state_machine__33022__auto____1 = (function (state_34536){
while(true){
var ret_value__33023__auto__ = (function (){try{while(true){
var result__33024__auto__ = switch__33021__auto__(state_34536);
if(cljs.core.keyword_identical_QMARK_(result__33024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33024__auto__;
}
break;
}
}catch (e34555){if((e34555 instanceof Object)){
var ex__33025__auto__ = e34555;
var statearr_34556_35909 = state_34536;
(statearr_34556_35909[(5)] = ex__33025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34555;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35910 = state_34536;
state_34536 = G__35910;
continue;
} else {
return ret_value__33023__auto__;
}
break;
}
});
cljs$core$async$state_machine__33022__auto__ = function(state_34536){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33022__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33022__auto____1.call(this,state_34536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33022__auto____0;
cljs$core$async$state_machine__33022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33022__auto____1;
return cljs$core$async$state_machine__33022__auto__;
})()
;})(switch__33021__auto__,c__33200__auto___35894,out))
})();
var state__33202__auto__ = (function (){var statearr_34557 = (f__33201__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33201__auto__.cljs$core$IFn$_invoke$arity$0() : f__33201__auto__.call(null));
(statearr_34557[(6)] = c__33200__auto___35894);

return statearr_34557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33202__auto__);
});})(c__33200__auto___35894,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34559 = arguments.length;
switch (G__34559) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33200__auto___35912 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33200__auto___35912,out){
return (function (){
var f__33201__auto__ = (function (){var switch__33021__auto__ = ((function (c__33200__auto___35912,out){
return (function (state_34597){
var state_val_34598 = (state_34597[(1)]);
if((state_val_34598 === (7))){
var inst_34593 = (state_34597[(2)]);
var state_34597__$1 = state_34597;
var statearr_34599_35913 = state_34597__$1;
(statearr_34599_35913[(2)] = inst_34593);

(statearr_34599_35913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34598 === (1))){
var inst_34560 = (new Array(n));
var inst_34561 = inst_34560;
var inst_34562 = (0);
var state_34597__$1 = (function (){var statearr_34600 = state_34597;
(statearr_34600[(7)] = inst_34561);

(statearr_34600[(8)] = inst_34562);

return statearr_34600;
})();
var statearr_34601_35914 = state_34597__$1;
(statearr_34601_35914[(2)] = null);

(statearr_34601_35914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34598 === (4))){
var inst_34565 = (state_34597[(9)]);
var inst_34565__$1 = (state_34597[(2)]);
var inst_34566 = (inst_34565__$1 == null);
var inst_34567 = cljs.core.not(inst_34566);
var state_34597__$1 = (function (){var statearr_34602 = state_34597;
(statearr_34602[(9)] = inst_34565__$1);

return statearr_34602;
})();
if(inst_34567){
var statearr_34603_35915 = state_34597__$1;
(statearr_34603_35915[(1)] = (5));

} else {
var statearr_34604_35916 = state_34597__$1;
(statearr_34604_35916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34598 === (15))){
var inst_34587 = (state_34597[(2)]);
var state_34597__$1 = state_34597;
var statearr_34605_35917 = state_34597__$1;
(statearr_34605_35917[(2)] = inst_34587);

(statearr_34605_35917[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34598 === (13))){
var state_34597__$1 = state_34597;
var statearr_34606_35918 = state_34597__$1;
(statearr_34606_35918[(2)] = null);

(statearr_34606_35918[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34598 === (6))){
var inst_34562 = (state_34597[(8)]);
var inst_34583 = (inst_34562 > (0));
var state_34597__$1 = state_34597;
if(cljs.core.truth_(inst_34583)){
var statearr_34607_35919 = state_34597__$1;
(statearr_34607_35919[(1)] = (12));

} else {
var statearr_34608_35920 = state_34597__$1;
(statearr_34608_35920[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34598 === (3))){
var inst_34595 = (state_34597[(2)]);
var state_34597__$1 = state_34597;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34597__$1,inst_34595);
} else {
if((state_val_34598 === (12))){
var inst_34561 = (state_34597[(7)]);
var inst_34585 = cljs.core.vec(inst_34561);
var state_34597__$1 = state_34597;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34597__$1,(15),out,inst_34585);
} else {
if((state_val_34598 === (2))){
var state_34597__$1 = state_34597;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34597__$1,(4),ch);
} else {
if((state_val_34598 === (11))){
var inst_34577 = (state_34597[(2)]);
var inst_34578 = (new Array(n));
var inst_34561 = inst_34578;
var inst_34562 = (0);
var state_34597__$1 = (function (){var statearr_34609 = state_34597;
(statearr_34609[(10)] = inst_34577);

(statearr_34609[(7)] = inst_34561);

(statearr_34609[(8)] = inst_34562);

return statearr_34609;
})();
var statearr_34610_35924 = state_34597__$1;
(statearr_34610_35924[(2)] = null);

(statearr_34610_35924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34598 === (9))){
var inst_34561 = (state_34597[(7)]);
var inst_34575 = cljs.core.vec(inst_34561);
var state_34597__$1 = state_34597;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34597__$1,(11),out,inst_34575);
} else {
if((state_val_34598 === (5))){
var inst_34570 = (state_34597[(11)]);
var inst_34565 = (state_34597[(9)]);
var inst_34561 = (state_34597[(7)]);
var inst_34562 = (state_34597[(8)]);
var inst_34569 = (inst_34561[inst_34562] = inst_34565);
var inst_34570__$1 = (inst_34562 + (1));
var inst_34571 = (inst_34570__$1 < n);
var state_34597__$1 = (function (){var statearr_34611 = state_34597;
(statearr_34611[(11)] = inst_34570__$1);

(statearr_34611[(12)] = inst_34569);

return statearr_34611;
})();
if(cljs.core.truth_(inst_34571)){
var statearr_34612_35926 = state_34597__$1;
(statearr_34612_35926[(1)] = (8));

} else {
var statearr_34613_35927 = state_34597__$1;
(statearr_34613_35927[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34598 === (14))){
var inst_34590 = (state_34597[(2)]);
var inst_34591 = cljs.core.async.close_BANG_(out);
var state_34597__$1 = (function (){var statearr_34615 = state_34597;
(statearr_34615[(13)] = inst_34590);

return statearr_34615;
})();
var statearr_34616_35928 = state_34597__$1;
(statearr_34616_35928[(2)] = inst_34591);

(statearr_34616_35928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34598 === (10))){
var inst_34581 = (state_34597[(2)]);
var state_34597__$1 = state_34597;
var statearr_34617_35929 = state_34597__$1;
(statearr_34617_35929[(2)] = inst_34581);

(statearr_34617_35929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34598 === (8))){
var inst_34570 = (state_34597[(11)]);
var inst_34561 = (state_34597[(7)]);
var tmp34614 = inst_34561;
var inst_34561__$1 = tmp34614;
var inst_34562 = inst_34570;
var state_34597__$1 = (function (){var statearr_34618 = state_34597;
(statearr_34618[(7)] = inst_34561__$1);

(statearr_34618[(8)] = inst_34562);

return statearr_34618;
})();
var statearr_34619_35930 = state_34597__$1;
(statearr_34619_35930[(2)] = null);

(statearr_34619_35930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33200__auto___35912,out))
;
return ((function (switch__33021__auto__,c__33200__auto___35912,out){
return (function() {
var cljs$core$async$state_machine__33022__auto__ = null;
var cljs$core$async$state_machine__33022__auto____0 = (function (){
var statearr_34620 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34620[(0)] = cljs$core$async$state_machine__33022__auto__);

(statearr_34620[(1)] = (1));

return statearr_34620;
});
var cljs$core$async$state_machine__33022__auto____1 = (function (state_34597){
while(true){
var ret_value__33023__auto__ = (function (){try{while(true){
var result__33024__auto__ = switch__33021__auto__(state_34597);
if(cljs.core.keyword_identical_QMARK_(result__33024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33024__auto__;
}
break;
}
}catch (e34621){if((e34621 instanceof Object)){
var ex__33025__auto__ = e34621;
var statearr_34622_35931 = state_34597;
(statearr_34622_35931[(5)] = ex__33025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34621;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35932 = state_34597;
state_34597 = G__35932;
continue;
} else {
return ret_value__33023__auto__;
}
break;
}
});
cljs$core$async$state_machine__33022__auto__ = function(state_34597){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33022__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33022__auto____1.call(this,state_34597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33022__auto____0;
cljs$core$async$state_machine__33022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33022__auto____1;
return cljs$core$async$state_machine__33022__auto__;
})()
;})(switch__33021__auto__,c__33200__auto___35912,out))
})();
var state__33202__auto__ = (function (){var statearr_34623 = (f__33201__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33201__auto__.cljs$core$IFn$_invoke$arity$0() : f__33201__auto__.call(null));
(statearr_34623[(6)] = c__33200__auto___35912);

return statearr_34623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33202__auto__);
});})(c__33200__auto___35912,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34625 = arguments.length;
switch (G__34625) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33200__auto___35938 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33200__auto___35938,out){
return (function (){
var f__33201__auto__ = (function (){var switch__33021__auto__ = ((function (c__33200__auto___35938,out){
return (function (state_34667){
var state_val_34668 = (state_34667[(1)]);
if((state_val_34668 === (7))){
var inst_34663 = (state_34667[(2)]);
var state_34667__$1 = state_34667;
var statearr_34669_35941 = state_34667__$1;
(statearr_34669_35941[(2)] = inst_34663);

(statearr_34669_35941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34668 === (1))){
var inst_34626 = [];
var inst_34627 = inst_34626;
var inst_34628 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34667__$1 = (function (){var statearr_34670 = state_34667;
(statearr_34670[(7)] = inst_34627);

(statearr_34670[(8)] = inst_34628);

return statearr_34670;
})();
var statearr_34671_35942 = state_34667__$1;
(statearr_34671_35942[(2)] = null);

(statearr_34671_35942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34668 === (4))){
var inst_34631 = (state_34667[(9)]);
var inst_34631__$1 = (state_34667[(2)]);
var inst_34632 = (inst_34631__$1 == null);
var inst_34633 = cljs.core.not(inst_34632);
var state_34667__$1 = (function (){var statearr_34672 = state_34667;
(statearr_34672[(9)] = inst_34631__$1);

return statearr_34672;
})();
if(inst_34633){
var statearr_34673_35944 = state_34667__$1;
(statearr_34673_35944[(1)] = (5));

} else {
var statearr_34674_35945 = state_34667__$1;
(statearr_34674_35945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34668 === (15))){
var inst_34657 = (state_34667[(2)]);
var state_34667__$1 = state_34667;
var statearr_34675_35946 = state_34667__$1;
(statearr_34675_35946[(2)] = inst_34657);

(statearr_34675_35946[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34668 === (13))){
var state_34667__$1 = state_34667;
var statearr_34676_35947 = state_34667__$1;
(statearr_34676_35947[(2)] = null);

(statearr_34676_35947[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34668 === (6))){
var inst_34627 = (state_34667[(7)]);
var inst_34652 = inst_34627.length;
var inst_34653 = (inst_34652 > (0));
var state_34667__$1 = state_34667;
if(cljs.core.truth_(inst_34653)){
var statearr_34677_35950 = state_34667__$1;
(statearr_34677_35950[(1)] = (12));

} else {
var statearr_34678_35951 = state_34667__$1;
(statearr_34678_35951[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34668 === (3))){
var inst_34665 = (state_34667[(2)]);
var state_34667__$1 = state_34667;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34667__$1,inst_34665);
} else {
if((state_val_34668 === (12))){
var inst_34627 = (state_34667[(7)]);
var inst_34655 = cljs.core.vec(inst_34627);
var state_34667__$1 = state_34667;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34667__$1,(15),out,inst_34655);
} else {
if((state_val_34668 === (2))){
var state_34667__$1 = state_34667;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34667__$1,(4),ch);
} else {
if((state_val_34668 === (11))){
var inst_34635 = (state_34667[(10)]);
var inst_34631 = (state_34667[(9)]);
var inst_34645 = (state_34667[(2)]);
var inst_34646 = [];
var inst_34647 = inst_34646.push(inst_34631);
var inst_34627 = inst_34646;
var inst_34628 = inst_34635;
var state_34667__$1 = (function (){var statearr_34679 = state_34667;
(statearr_34679[(11)] = inst_34647);

(statearr_34679[(7)] = inst_34627);

(statearr_34679[(8)] = inst_34628);

(statearr_34679[(12)] = inst_34645);

return statearr_34679;
})();
var statearr_34680_35960 = state_34667__$1;
(statearr_34680_35960[(2)] = null);

(statearr_34680_35960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34668 === (9))){
var inst_34627 = (state_34667[(7)]);
var inst_34643 = cljs.core.vec(inst_34627);
var state_34667__$1 = state_34667;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34667__$1,(11),out,inst_34643);
} else {
if((state_val_34668 === (5))){
var inst_34635 = (state_34667[(10)]);
var inst_34631 = (state_34667[(9)]);
var inst_34628 = (state_34667[(8)]);
var inst_34635__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34631) : f.call(null,inst_34631));
var inst_34636 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34635__$1,inst_34628);
var inst_34637 = cljs.core.keyword_identical_QMARK_(inst_34628,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34638 = ((inst_34636) || (inst_34637));
var state_34667__$1 = (function (){var statearr_34681 = state_34667;
(statearr_34681[(10)] = inst_34635__$1);

return statearr_34681;
})();
if(cljs.core.truth_(inst_34638)){
var statearr_34682_35964 = state_34667__$1;
(statearr_34682_35964[(1)] = (8));

} else {
var statearr_34683_35965 = state_34667__$1;
(statearr_34683_35965[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34668 === (14))){
var inst_34660 = (state_34667[(2)]);
var inst_34661 = cljs.core.async.close_BANG_(out);
var state_34667__$1 = (function (){var statearr_34685 = state_34667;
(statearr_34685[(13)] = inst_34660);

return statearr_34685;
})();
var statearr_34686_35966 = state_34667__$1;
(statearr_34686_35966[(2)] = inst_34661);

(statearr_34686_35966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34668 === (10))){
var inst_34650 = (state_34667[(2)]);
var state_34667__$1 = state_34667;
var statearr_34687_35967 = state_34667__$1;
(statearr_34687_35967[(2)] = inst_34650);

(statearr_34687_35967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34668 === (8))){
var inst_34635 = (state_34667[(10)]);
var inst_34631 = (state_34667[(9)]);
var inst_34627 = (state_34667[(7)]);
var inst_34640 = inst_34627.push(inst_34631);
var tmp34684 = inst_34627;
var inst_34627__$1 = tmp34684;
var inst_34628 = inst_34635;
var state_34667__$1 = (function (){var statearr_34688 = state_34667;
(statearr_34688[(7)] = inst_34627__$1);

(statearr_34688[(8)] = inst_34628);

(statearr_34688[(14)] = inst_34640);

return statearr_34688;
})();
var statearr_34689_35975 = state_34667__$1;
(statearr_34689_35975[(2)] = null);

(statearr_34689_35975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33200__auto___35938,out))
;
return ((function (switch__33021__auto__,c__33200__auto___35938,out){
return (function() {
var cljs$core$async$state_machine__33022__auto__ = null;
var cljs$core$async$state_machine__33022__auto____0 = (function (){
var statearr_34690 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34690[(0)] = cljs$core$async$state_machine__33022__auto__);

(statearr_34690[(1)] = (1));

return statearr_34690;
});
var cljs$core$async$state_machine__33022__auto____1 = (function (state_34667){
while(true){
var ret_value__33023__auto__ = (function (){try{while(true){
var result__33024__auto__ = switch__33021__auto__(state_34667);
if(cljs.core.keyword_identical_QMARK_(result__33024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33024__auto__;
}
break;
}
}catch (e34691){if((e34691 instanceof Object)){
var ex__33025__auto__ = e34691;
var statearr_34692_35990 = state_34667;
(statearr_34692_35990[(5)] = ex__33025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34667);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34691;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35991 = state_34667;
state_34667 = G__35991;
continue;
} else {
return ret_value__33023__auto__;
}
break;
}
});
cljs$core$async$state_machine__33022__auto__ = function(state_34667){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33022__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33022__auto____1.call(this,state_34667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33022__auto____0;
cljs$core$async$state_machine__33022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33022__auto____1;
return cljs$core$async$state_machine__33022__auto__;
})()
;})(switch__33021__auto__,c__33200__auto___35938,out))
})();
var state__33202__auto__ = (function (){var statearr_34693 = (f__33201__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33201__auto__.cljs$core$IFn$_invoke$arity$0() : f__33201__auto__.call(null));
(statearr_34693[(6)] = c__33200__auto___35938);

return statearr_34693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33202__auto__);
});})(c__33200__auto___35938,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
