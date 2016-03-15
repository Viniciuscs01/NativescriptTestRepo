var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var common = require("ui/date-picker/date-picker-common");
function onYearPropertyChanged(data) {
    var picker = data.object;
    if (picker.android && picker.android.getYear() !== data.newValue) {
        picker.android.updateDate(data.newValue, picker.android.getMonth(), picker.android.getDayOfMonth());
    }
}
common.DatePicker.yearProperty.metadata.onSetNativeValue = onYearPropertyChanged;
function onMonthPropertyChanged(data) {
    var picker = data.object;
    if (picker.android && picker.android.getMonth() !== (data.newValue - 1)) {
        picker.android.updateDate(picker.android.getYear(), data.newValue - 1, picker.android.getDayOfMonth());
    }
}
common.DatePicker.monthProperty.metadata.onSetNativeValue = onMonthPropertyChanged;
function onDayPropertyChanged(data) {
    var picker = data.object;
    if (picker.android && picker.android.getDayOfMonth !== data.newValue) {
        picker.android.updateDate(picker.android.getYear(), picker.android.getMonth(), data.newValue);
    }
}
common.DatePicker.dayProperty.metadata.onSetNativeValue = onDayPropertyChanged;
function onMaxDatePropertyChanged(data) {
    var picker = data.object;
    var newValue = data.newValue.getTime();
    if (picker.android && picker.android.getMaxDate() !== newValue) {
        picker.android.setMaxDate(newValue);
    }
}
common.DatePicker.maxDateProperty.metadata.onSetNativeValue = onMaxDatePropertyChanged;
function onMinDatePropertyChanged(data) {
    var picker = data.object;
    var newValue = data.newValue.getTime();
    if (picker.android && picker.android.getMinDate() !== newValue) {
        picker.android.setMinDate(newValue);
    }
}
common.DatePicker.minDateProperty.metadata.onSetNativeValue = onMinDatePropertyChanged;
require("utils/module-merge").merge(common, exports);
var DatePicker = (function (_super) {
    __extends(DatePicker, _super);
    function DatePicker() {
        _super.call(this);
        var that = new WeakRef(this);
        this._listener = new android.widget.DatePicker.OnDateChangedListener({
            get owner() {
                return that.get();
            },
            onDateChanged: function (picker, year, month, day) {
                if (this.owner) {
                    if (year !== this.owner.year) {
                        this.owner._onPropertyChangedFromNative(common.DatePicker.yearProperty, year);
                    }
                    if ((month + 1) !== this.owner.month) {
                        this.owner._onPropertyChangedFromNative(common.DatePicker.monthProperty, month + 1);
                    }
                    if (day !== this.owner.day) {
                        this.owner._onPropertyChangedFromNative(common.DatePicker.dayProperty, day);
                    }
                }
            }
        });
    }
    Object.defineProperty(DatePicker.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    DatePicker.prototype._createUI = function () {
        this._android = new android.widget.DatePicker(this._context);
        this._android.setCalendarViewShown(false);
        this._android.init(0, 0, 0, this._listener);
    };
    return DatePicker;
})(common.DatePicker);
exports.DatePicker = DatePicker;
