"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Tone = require("tone");
var React = require("react");
var synth = new Tone.Synth().toDestination();
var now = Tone.now();
var Whistler = /** @class */ (function (_super) {
    __extends(Whistler, _super);
    function Whistler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Whistler.prototype.render = function () {
        return (<div>
                <button onClick={function () { return synth.triggerAttackRelease("C4", '8n'); }}>C4</button>
                <button onClick={function () { return synth.triggerAttackRelease("C#4", '8n'); }}>C#4</button>
                <button onClick={function () { return synth.triggerAttackRelease("D4", '8n'); }}>D4</button>
                <button onClick={function () { return synth.triggerAttackRelease("D#4", '8n'); }}>D#4</button>
                <button onClick={function () { return synth.triggerAttackRelease("E4", '8n'); }}>E4</button>
                <button onClick={function () { return synth.triggerAttackRelease("F4", '8n'); }}>F4</button>
                <button onClick={function () { return synth.triggerAttackRelease("G4", '8n'); }}>G4</button>
                <button onClick={function () { return synth.triggerAttackRelease("G#4", '8n'); }}>G#4</button>
                <button onClick={function () { return synth.triggerAttackRelease("A4", '8n'); }}>A4</button>
                <button onClick={function () { return synth.triggerAttackRelease("A#4", '8n'); }}>A#4</button>
                <button onClick={function () { return synth.triggerAttackRelease("B4", '8n'); }}>B4</button>
                <button onClick={function () { return synth.triggerAttackRelease("B#4", '8n'); }}>B#4</button>
                <button onClick={function () { return synth.triggerAttackRelease("C5", '8n'); }}>C5</button>
            </div>);
    };
    return Whistler;
}(React.Component));
exports["default"] = Whistler;
