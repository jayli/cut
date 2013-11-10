/**
 * @fileoverview 
 * @author kissy-team<kissy-team@gmail.com>
 * @module cut
 **/
KISSY.add(function (S) {

	"use strict";

	var OPT_PARAM = {

	};

	/**
	 * 模块构造函数
	 */
	var Cut = function(){
		this._init.apply(this,arguments);
	};

	/**
	 * 模块实例方法
	 */
	S.augment(Cut, S.Event.Target, {

		_init:function(target,opt){
			var self = this;

			debugger

			// insert your code here...

			self._buildParam(opt);

			return this;
		},

		_buildParam:function(o){

			var self = this;

			if(o === undefined  o === null){
				o = {};
			}

			function setParam(def, key){
				var v = o[key];
				self[key] = (v === undefined  v === null) ? def : v;
			}

			S.each(OPT_PARAM,setParam);

			return this;
		}
	});

	return Cut;

}, {
	requires: ['node']
});

