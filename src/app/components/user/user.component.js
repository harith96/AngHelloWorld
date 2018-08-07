var Student = /** @class */ (function () {
    function Student(_name) {
        this._name = _name;
    }
    Object.defineProperty(Student.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    return Student;
}());
