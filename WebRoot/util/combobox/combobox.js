(function($) {
	$
			.widget(
					"custom.combobox",
					{
						_create : function() {
							this.wrapper = $("<span>").addClass(
									"custom-combobox")
									.insertAfter(this.element);

							this.element.hide();
							this._createAutocomplete();
							this._createShowAllButton();
						},

						_createAutocomplete : function() {
							var selected = this.element.children(":selected"), value = selected
									.val() ? selected.text() : "", width = this.element
									.width();
							this.input = $("<input>")
									.appendTo(this.wrapper)
									.val(value)
									.attr("title", "")
									.css("width", width)
									// venice
									.addClass(
											"custom-combobox-input ui-widget ui-widget-content ui-state-default ui-corner-left")
									.autocomplete({
										delay : 0,
										minLength : 0,
										source : $.proxy(this, "_source")
									}).tooltip({
										tooltipClass : "ui-state-highlight"
									});

							this._on(this.input, {
								autocompleteselect : function(event, ui) {
									ui.item.option.selected = true;
									this._trigger("select", event, {
										item : ui.item.option
									});
								},

								autocompletechange : "_removeIfInvalid"
							});
						},

						_createShowAllButton : function() {
							var input = this.input, wasOpen = false;
							var positiontop = input.position().top; // venice
							var positionleft = input.position().left;// venice
							var inputwidth = input.width();// venice
							$("<a>").css({
								position : "absolute",
								'top' : positiontop,
								'left' : positionleft + inputwidth - 22,
								'width' : 25
							})// venice
							.attr("tabIndex", -1)
							// .attr( "title", "Show All Items" )
							.tooltip().appendTo(this.wrapper).button({
								icons : {
									primary : "ui-icon-triangle-1-s"
								},
								text : false
							}).removeClass("ui-corner-all").addClass(
									"custom-combobox-toggle ui-corner-right")
									.mousedown(
											function() {
												wasOpen = input.autocomplete(
														"widget")
														.is(":visible");
											}).click(function() {
										input.focus();

										// Close if already visible
										if (wasOpen) {
											return;
										}

										// Pass empty string as value to search
										// for, displaying all results
										input.autocomplete("search", "");
									});
						},

						_source : function(request, response) {
							var matcher = new RegExp($.ui.autocomplete
									.escapeRegex(request.term), "i");
							response(this.element.children("option").map(
									function() {
										var text = $(this).text();
										var val = $(this).toPinyin(
												jQuery(this).text());
										if (val.indexOf(request.term) >= 0)// venice
											return {
												label : text,
												value : text,
												option : this
											};
									}));
						},

						_removeIfInvalid : function(event, ui) {

							// Selected an item, nothing to do
							if (ui.item) {
								return;
							}

							// Search for a match (case-insensitive)
							var value = this.input.val(), valueLowerCase = value
									.toLowerCase(), valid = false;
							this.element
									.children("option")
									.each(
											function(i, o) {
												if ($(this).text()
														.toLowerCase() === valueLowerCase) {
													this.selected = valid = true;
													return false;
												}
											});

							// Found a match, nothing to do
							if (valid) {
								return;
							}

							// Remove invalid value
							this.input.val("")
							// .attr( "title", value + " didn't match any item"
							// )
							.tooltip("open");
							this.element.val("");
							this._delay(function() {
								this.input.tooltip("close").attr("title", "");
							}, 2500);
							this.input.autocomplete("instance").term = "";
							jQuery(this).trigger("change");
						},

						// =============add by daizhe=============
						// =============给出派生的disabled方法=============
						// _setOptions is called with a hash of all options that
						// are changing
						// always refresh when changing options
						// 下面的_setOptions方法有了将无法准确返回到.combobox("option",……)方法调用之后，原因不明
						// _setOptions : function() {
						// // _super and _superApply handle keeping the right
						// // this-context
						// alert('ccc');
						// this._superApply(arguments);
						// this._refresh();
						// },

						// _setOption is called for each individual option that
						// is changing
						_setOption : function(key, value) {
							if (key == "disabled" && value == true) {
								this.wrapper.find("a").unbind("click");
								this.input.attr("disabled", true);
							} else if (key == "disabled" && value == false) {
								this._destroy();
								this._create();
							}
							// this._super(key, value);
							$.Widget.prototype._setOption
									.apply(this, arguments);
						},
						// =============add by daizhe=============

						_destroy : function() {
							this.wrapper.remove();
							this.element.show();
						}
					});
})(jQuery);