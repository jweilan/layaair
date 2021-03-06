var Particle_EternalLight = /** @class */ (function () {
    function Particle_EternalLight() {
        Laya3D.init(0, 0, true);
        Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;
        Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
        Laya.Stat.show();
        var scene = Laya.stage.addChild(new Laya.Scene());
        var camera = scene.addChild(new Laya.Camera(0, 0.1, 100));
        camera.transform.translate(new Laya.Vector3(0, 2, 4));
        camera.transform.rotate(new Laya.Vector3(-15, 0, 0), true, false);
        var particleSprite3D = scene.addChild(Laya.Sprite3D.load("../../res/threeDimen/particle/ETF_Eternal_Light.lh"));
    }
    return Particle_EternalLight;
}());
new Particle_EternalLight;
