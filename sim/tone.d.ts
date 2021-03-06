interface ToneFactory {
    new(inputs?: number, outputs?: number): Tone
}

declare class Tone {
    context: AudioContext;
    input: GainNode;
    output: GainNode;
    chain(...nodes: any[]): Tone;
    connect(unit: any, outputNum?:number, inputNum?:number): Tone;
    connectSeries(...args: any[]): Tone;
    connectParallel(...args: any[]): Tone;
    dbToGain(db: number): number;
    defaultArg(given: any, fallback: any): any;
    disconnect(output?:number | AudioNode | Tone.Effect): Tone;
    dispose(): Tone;
    equalPowerScale(percent:number): number;
    expScale(gain: number): number;
    extend(child: ()=>any, parent?: ()=>any): void;
    fan(...nodes: any[]): Tone;
    frequencyToNote(freq:number):string;
    frequencyToSeconds(freq:number):number;
    gainToDb(gain: number): number;
    get(params?:any): any;
    interpolate(input: number, outputMin: number, outputMax: number): number;
    intervalToFrequencyRatio(interval: number): number;
    isFrequency(freq: number): boolean;
    isFunction(arg: any): boolean;
    isUndef(arg: any): boolean;
    midiToNote(midiNumber: number): string;
    noGC(): Tone;
    normalize(input: number, inputMin: number, inputMax: number): number;
    notationToSeconds(notation: string, bpm?: number, timeSignature?: number): number;
    noteToFrequency(note: string): number;
    noteToMidi(note: string): number;
    now(): number;
    optionsObject(values: Array<any>, keys: Array<string>, defaults?:any): any;
    receive(channelName: string, input?: AudioNode): Tone;
    samplesToSeconds(samples: number): number;
    secondsToFrequency(seconds: number): number;
    send(channelName: string, amount?: number): Tone;
    set(params: any, value?: number, rampTime?: Tone.Time): Tone;
    setContext(ctx: AudioContext): void;
    setPreset(presetName: string): Tone;
    startMobile(): void;
    toFrequency(note: Tone.Frequency, now?: number): number;
    toMaster(): Tone;
    toSamples(time: Tone.Time): number;
    toSeconds(time?: Tone.Time, now?: number): number;
    triggerAttackRelease(note: string | number, duration: Tone.Time, time?: Tone.Time, velocity?: number): Tone;
}

declare module Tone {

    var Abs: {
        new(): Tone.Abs;
    };

    interface Abs extends Tone.SignalBase {
        dispose(): Tone.Abs;
    }

    var Add: {
        new(value?:number): Tone.Add;
    };

    interface Add extends Tone.Signal {
        dispose(): Tone.Add;
    }

    var AmplitudeEnvelope: {
        new(attack?: any, decay?: Tone.Time, sustain?: number, release?:Tone.Time): Tone.AmplitudeEnvelope;
    };

    interface AmplitudeEnvelope extends Tone.Envelope {
        dispose(): Tone.AmplitudeEnvelope;
    }

    var AMSynth: {
        new(options?: any): Tone.AMSynth;
    };

    interface AMSynth extends Tone.Monophonic {
        carrier: Tone.MonoSynth;
        frequency: Tone.Signal;
        harmonicity: number;
        modulator: Tone.MonoSynth;
        dispose(): Tone.AMSynth;
        triggerEnvelopeAttack(time?: Tone.Time, velocity?: number): Tone.AMSynth;
        triggerEnvelopeRelease(time?: Tone.Time): Tone.AMSynth;
    }

    var AND: {
        new(inputCount?:number): Tone.AND;
    };

    interface AND extends Tone.SignalBase {
        dispose(): Tone.AND;
    }

    var AudioToGain: {
        new(): Tone.AudioToGain;
    };

    interface AudioToGain extends Tone.SignalBase {
        dispose(): Tone.AudioToGain;
    }

    var AutoPanner: {
        new(frequency?: any): Tone.AutoPanner;
    };

    interface AutoPanner extends Effect {
        amount: Tone.Signal;
        frequency: Tone.Signal;
        type: string;
        dispose(): Tone.AutoPanner;
        start(time?: Tone.Time): Tone.AutoPanner;
        stop(time?: Tone.Time): Tone.AutoPanner;
        sync(): Tone.AutoPanner;
        unsync(): Tone.AutoPanner;
    }

    var AutoWah: {
        new(baseFrequency?: any, octaves?: number, sensitivity?:number): Tone.AutoWah;
    };

    interface AutoWah extends Tone.Effect {
        baseFrequency: Tone.Frequency;
        follower: Tone.Follower;
        gain: Tone.Signal;
        octaves: number;
        Q: Tone.Signal;
        sensitivity: number;
        dispose(): Tone.AutoWah;
    }

    var BitCrusher: {
        new(bits: any): Tone.BitCrusher;
    };

    interface BitCrusher extends Tone.Effect {
        bits: number;
        dispose(): Tone.BitCrusher;
    }

    interface BPM{}

    var Buffer: {
        new(url?: AudioBuffer | string, callback?:(e: any) => any): Tone.Buffer;
    };

    interface Buffer extends Tone {
        duration: number;
        loaded: boolean;
        onload: (e: any) => any;
        onprogress: (percent: number) => any;
        onerror: (err: any) => any;
        reverse: boolean;
        url: string;
        load(url: string, callback?: (e: any) => any ): Tone.Buffer;
        dispose(): Tone.Buffer;
        buffer: AudioBuffer;
        get(): AudioBuffer;
        set(buffer: AudioBuffer | string ): Tone.Buffer;
        toMaster(): Tone.Buffer;
    }

    var Buffers: {
        new(urls?: pxsim.Map<string>, callback?:(e: any) => any): Tone.Buffers;
    };

    interface Buffers {
        urls: pxsim.Map<string>;
        volume: number;
        fadeOut: number;
        loaded: boolean;
        get(name: string | number): AudioBuffer;
        toMaster(): Tone.Buffers;
    }    

    var Chebyshev: {
        new(order: any): Tone.Chebyshev;
    };

    interface Chebyshev extends Tone.Effect {
        order: number;
        oversample: string;
        dispose(): Tone.Chebyshev;
    }

    var Chorus: {
        new(rate?: any, delayTime?: number, depth?: number): Tone.Chorus;
    };

    interface Chorus extends Tone.StereoXFeedbackEffect {
        delayTime: Tone.Signal
        depth: Tone.Signal;
        frequency: Tone.Signal;
        type: string;
        dispose(): Tone.Chorus;
    }

    var Clip: {
        new(min: number, max: number): Tone.Clip;
    };

    interface Clip extends Tone.SignalBase {
        max: Tone.Signal;
        min: Tone.Signal;
        dispose(): Tone.Clip;
    }

    var Context: {
        new(): Tone.Context;
    };

    interface Context extends Tone.Emitter {
        dispose(): Tone.Emitter;
    }

    var Compressor: {
        new(threshold?: any, ratio?: number): Tone.Compressor;
    };

    interface Compressor extends Tone {
        attack: Tone.Signal;
        knee: AudioParam;
        ratio: AudioParam;
        release: Tone.Signal;
        threshold: AudioParam;
        dispose(): Tone.Compressor;
    }

    var Convolver: {
        new(url?: string | AudioBuffer): Tone.Convolver;
    };

    interface Convolver extends Tone.Effect {
        buffer: AudioBuffer;
        load(url: string, callback?: (e: any)=>any): Tone.Convolver;
        dispose(): Tone.Convolver;
    }

    var CrossFade: {
        new(initialFade?: number): Tone.CrossFade;
    };

    interface CrossFade extends Tone {
        a: GainNode;
        b: GainNode;
        fade: Tone.Signal;
        dispose(): Tone.CrossFade;
    }

    var Distortion: {
        new(distortion: any): Tone.Distortion;
    };

    interface Distortion extends Tone.Effect {
        distortion: number;
        oversample: string;
        dispose(): Tone.Distortion;
    }

    var DuoSynth: {
        new(options?: any): Tone.DuoSynth;
    };

    interface DuoSynth extends Tone.Monophonic {
        frequency: Tone.Signal;
        harmonicity: number;
        vibratoAmount: Tone.Signal;
        vibratoRate: Tone.Signal;
        voice0: Tone.MonoSynth;
        voice1: Tone.MonoSynth;
        triggerEnvelopeAttack(time?: Tone.Time, velocity?: number): Tone.DuoSynth;
        triggerEnvelopeRelease(time?: Tone.Time): Tone.DuoSynth;
    }

    var Effect: {
        new(initialWet?: number): Tone.Effect;
    };

    interface Effect extends Tone {
        wet: Tone.Signal;
        bypass(): Tone.Effect;
        dispose(): Tone.Effect;
        toMaster(): Tone.Effect;
    }

    var Envelope: {
        new(attack: any, decay?: Tone.Time, sustain?: number, release?: Tone.Time): Tone.Envelope;
    };

    interface Envelope extends Tone {
        attack: Tone.Time;
        decay: Tone.Time;
        release: Tone.Time;
        sustain: number;
        dispose(): Tone.Envelope;
        triggerAttack(time?: Tone.Time, velocity?: number): Tone.Envelope;
        triggerAttackRelease(duration: Tone.Time, time?: Tone.Time, velocity?: number): Tone.Envelope;
        triggerRelease(time?: Tone.Time): Tone.Envelope;
    }

    var Emitter: {
        new(): Tone.Emitter;
    };

    interface Emitter extends Tone {
        dispose(): Tone.Emitter;
    }

    var EQ3: {
        new(lowLevel?: any, midLevel?: number, highLevel?: number): Tone.EQ3;
    };

    interface EQ3 extends Tone {
        highFrequency: Tone.Signal;
        high: GainNode;
        lowFrequency: Tone.Signal;
        low: GainNode;
        mid: GainNode;
        dispose(): Tone.EQ3;
    }

    var Equal: {
        new(value: number): Tone.Equal;
    };

    interface Equal extends Tone.SignalBase {
        value: number;
        dispose(): Tone.Equal;
    }

    var EqualPowerGain: {
        new(): Tone.EqualPowerGain;
    };

    interface EqualPowerGain extends Tone.SignalBase {
        dispose(): Tone.EqualPowerGain;
    }

    var EqualZero: {
        new(): Tone.EqualZero;
    };

    interface EqualZero extends Tone.SignalBase {
        dispose(): Tone.EqualZero;
    }

    var Expr: {
        new(expr: string): Tone.Expr;
    };

    interface Expr extends Tone.SignalBase {
        input: any;
        output: any;
        dispose(): Tone.Expr;
    }

    var FeedbackCombFilter: {
        new(minDelay?: number, maxDelay?: number): Tone.FeedbackCombFilter;
    };

    interface FeedbackCombFilter extends Tone {
        delayTime: Tone.Time;
        resonance: Tone.Signal;
        dispose(): Tone.FeedbackCombFilter;
    }

    var FeedbackDelay: {
        new(delayTime: any): Tone.FeedbackDelay;
    };

    interface FeedbackDelay extends Tone.FeedbackEffect {
        delayTime: Tone.Signal;
        dispose(): Tone.FeedbackDelay;
    }

    var FeedbackEffect: {
        new(initialFeedback?: any): Tone.FeedbackEffect;
    };

    interface FeedbackEffect extends Tone.Effect {
        feedback: Tone.Signal;
        dispose(): Tone.FeedbackEffect;
    }

    var Filter: {
        new(freq?: any, type?: string, rolloff?: number): Tone.Filter;
    };

    interface Filter extends Tone {
        detune: Tone.Signal;
        frequency: Tone.Signal;
        gain: Tone.Signal;
        Q: Tone.Signal;
        rolloff: number;
        type: string;
        dispose(): Tone.Filter;
    }

    var FMSynth: {
        new(options?: any): Tone.FMSynth;
    };

    interface FMSynth extends Tone.Monophonic {
        carrier: Tone.MonoSynth;
        frequency: Tone.Signal;
        harmonicity: number;
        modulationIndex: number;
        modulator: Tone.MonoSynth;
        dispose(): Tone.FMSynth;
        triggerEnvelopeAttack(time?: Tone.Time, velocity?: number): Tone.FMSynth;
        triggerEnvelopeRelease(time?: Tone.Time): Tone.FMSynth;
    }

    var Follower: {
        new(attack?: Tone.Time, release?: Tone.Time): Tone.Follower;
    };

    interface Follower extends Tone {
        attack: Tone.Time;
        release: Tone.Time;
        dispose(): Tone.Follower;
    }

    var Freeverb: {
        new(roomSize?: any, dampening?: number): Tone.Freeverb;
    };

    interface Freeverb extends Tone.Effect {
        dampening: Tone.Signal;
        roomSize: Tone.Signal;
        dispose(): Tone.Freeverb;
    }

    interface Frequency{}

    var Gate: {
        new(thresh?: number, attackTime?: Tone.Time, releaseTime?: Tone.Time): Tone.Gate;
    };

    interface Gate extends Tone {
        attack: Tone.Time;
        release: Tone.Time;
        threshold: Tone.Time;
        dispose(): Tone.Gate;
    }

    var GreaterThan: {
        new(value?: number): Tone.GreaterThan;
    };

    interface GreaterThan extends Tone.Signal {
        dispose(): Tone.GreaterThan;
    }

    var GreaterThanZero: {
        new(): Tone.GreaterThanZero;
    };

    interface GreaterThanZero extends Tone.SignalBase {
        dispose(): Tone.GreaterThanZero;
    }

    var IfThenElse: {
        new(): Tone.IfThenElse;
    };

    interface IfThenElse extends Tone.SignalBase {
        dispose(): Tone.IfThenElse;
    }

    var Instrument: {
        new(): Tone.Instrument;
    };

    interface Instrument extends Tone {
        volume: Tone.Signal;
        triggerAttack(note: string | number, time?: Tone.Time, velocity?: number): Tone.Instrument;
        triggerAttackRelease(note: string | number, duration: Tone.Time, time?: Tone.Time, velocity?: number): Tone.Instrument;
        triggerRelease(time?: Tone.Time): Tone.Instrument;
        dispose(): Tone.Instrument;
    }

    var JCReverb: {
        new(roomSize: number): Tone.JCReverb;
    };

    interface JCReverb extends Tone.Effect {
        roomSize: Tone.Signal;
        dispose(): Tone.JCReverb;
    }

    var LessThan: {
        new(value?: number): Tone.LessThan;
    };

    interface LessThan extends Tone.Signal {
        dispose(): Tone.LessThan;
    }

    var LFO: {
        new(frequency?: any, outputMin?: number, outputMax?: number): Tone.LFO;
    };

    interface LFO extends Tone.Oscillator {
        amplitude: Tone.Signal;
        frequency: Tone.Signal;
        max: number;
        min: number;
        oscillator: Tone.Oscillator;
        phase: number;
        type: string;
        dispose(): Tone.LFO;
        start(time?: Tone.Time): Tone.LFO;
        stop(time?: Tone.Time): Tone.LFO;
        sync(delay?: Tone.Time): Tone.LFO;
        unsync(): Tone.LFO;
    }

    var Limiter: {
        new(threshold: AudioParam): Tone.Limiter;
    };

    interface Limiter extends Tone {
        dispose(): Tone.Limiter;
    }

    var LowpassCombFilter: {
        new(minDelay?: number, maxDelay?: number): Tone.LowpassCombFilter;
    };

    interface LowpassCombFilter extends Tone {
        dampening: Tone.Signal;
        delayTime: Tone.Time;
        resonance: Tone.Signal;
        dispose(): Tone.LowpassCombFilter;
        setDelayTimeAtTime(delayAmount: Tone.Time, time?: Tone.Time): Tone.LowpassCombFilter;
    }

    var Master: Tone.Master;

    interface Master extends Tone {
        mute: Boolean;
        volume: Tone.Signal;
        chain(): Tone.Master;
    }

    var Max: {
        new(max?: number): Tone.Max;
    };

    interface Max extends Tone.Signal {
        dispose(): Tone.Max;
    }

    var MembraneSynth: {
        new(options?: Object): Tone.MembraneSynth;
    };

    interface MembraneSynth extends Tone.Instrument {
        envelope: Tone.Envelope;
        filter: Tone.Filter;
        filterEnvelope: Tone.Envelope;
        noise: Tone.Noise;
        dispose(): Tone.MembraneSynth;
        triggerAttack(time?: Tone.Time, velocity?: number): Tone.MembraneSynth;
        triggerAttackRelease(duration: Tone.Time, time?: Tone.Time, velocity?: number): Tone.MembraneSynth;
        triggerRelease(time?: Tone.Time): Tone.MembraneSynth;
        toMaster(): Tone.MembraneSynth;
    }    

    var Merge: {
        new(): Tone.Merge;
    };

    interface Merge extends Tone {
        left: GainNode;
        right: GainNode;
        dispose(): Tone.Merge;
    }

    var Meter: {
        new(channels?: number, smoothing?: number, clipMemory?:number): Tone.Meter;
    };

    interface Meter extends Tone {
        dispose(): Tone.Meter;
        getDb(channel?:number): number;
        getLevel(channel?:number): number;
        getValue(channel?:number): number;
        isClipped(): boolean;
    }

    var Microphone: {
        new(): Tone.Microphone;
    };

    interface Microphone extends Tone.ExternalInput {}

    var ExternalInput: {
        new(inputNum?: number): Tone.Microphone;
    };

    interface ExternalInput extends Tone.Source {
        inputNum: number;
        sources: any[];
        supported: boolean;
        close(): Tone.ExternalInput;
        dispose(): Tone.Microphone;
        getSources(callback: (sources?: any[]) => any): Tone.ExternalInput;
        open(callback: (error?: any) => any): Tone.ExternalInput;
    }

    var MidSideEffect : {
        new(): Tone.MidSideEffect;
    };

    interface MidSideEffect extends Tone.StereoEffect {
        midReturn: GainNode;
        midSend: Tone.Expr;
        sideReturn: GainNode;
        sideSend: Tone.Expr;
        dispose(): Tone.MidSideEffect;
    }

    var Min: {
        new(min: number): Tone.Min;
    };

    interface Min extends Tone.Signal {
        dispose(): Tone.Min;
    }

    var Modulo: {
        new(modulus: number, bits?:number): Tone.Modulo;
    };

    interface Modulo extends Tone.SignalBase {
        value: number;
        dispose(): Tone.Modulo;
    }

    var Mono: {
        new(): Tone.Mono;
    };

    interface Mono extends Tone {
        dispose(): Tone.Mono;
    }

    var Monophonic: {
        new(): Tone.Monophonic;
    };

    interface Monophonic extends Tone.Instrument {
        portamento: Tone.Time;
        setNote(note: number | string):Tone.Monophonic;
    }

    var MonoSynth: {
        new(options?: any): Tone.MonoSynth;
    };

    interface MonoSynth extends Tone.Monophonic {
        detune: Tone.Signal;
        envelope: Tone.Envelope;
        filter: Tone.Filter;
        filterEnvelope: Tone.Envelope;
        frequency: Tone.Signal;
        oscillator: Tone.OmniOscillator;
        dispose(): Tone.MonoSynth;
        triggerEnvelopeAttack(time?: Tone.Time, velocity?: number): Tone.MonoSynth;
        triggerEnvelopeRelease(time?: Tone.Time): Tone.MonoSynth;
        triggerAttackRelease(note: string | number, duration: Tone.Time, time?: Tone.Time, velocity?: number): Tone.Instrument;
        toMaster(): Tone.MonoSynth;
    }

    var MultibandCompressor: {
        new(options?: Object): Tone.MultibandCompressor;
    };

    interface MultibandCompressor extends Tone {
        high: Tone.Compressor;
        highFrequency: Tone.Signal;
        low: Tone.Compressor;
        lowFrequency: Tone.Signal;
        mid: Tone.Compressor;
        dispose(): Tone.MultibandCompressor;
    }

    var EQMultiband: {
        new(options?: any): Tone.EQMultiband;
    };

    interface EQMultiband extends Tone {
        setType(type: string, band: number): void;
        getType(band: number): string;
        setFrequency(freq: number, band: number): void;
        getFrequency(band: number): number;
        setQ(Q: number, band: number): void;
        getQ(band: number): number;
        getGain(band: number): number;
        setGain(gain: number, band: number): void;
    }

    var MultibandSplit: {
        new(lowFrequency: number, highFrequency: number): Tone.MultibandSplit;
    };

    interface MultibandSplit extends Tone {
        high: Tone.Filter;
        highFrequency: Tone.Signal;
        low: Tone.Filter;
        lowFrequency: Tone.Signal;
        mid: Tone.Filter;
        dispose(): Tone.MultibandSplit;
    }

    var Multiply: {
        new(value?: number): Tone.Multiply;
    };

    interface Multiply extends Tone.Signal {
        dispose(): Tone.Multiply;
    }

    var Negate: {
        new(): Tone.Negate;
    };

    interface Negate extends Tone.SignalBase {
        dispose(): Tone.Negate;
    }

    var Noise: {
        new(type: string): Tone.Noise;
    };

    interface Noise extends Tone.Source {
        playbackRate: Tone.Signal;
        type: string;
        dispose(): Tone.Noise;
    }

    var NoiseSynth: {
        new(options?: Object): Tone.NoiseSynth;
    };

    interface NoiseSynth extends Tone.Instrument {
        envelope: Tone.Envelope;
        filter: Tone.Filter;
        filterEnvelope: Tone.Envelope;
        noise: Tone.Noise;
        dispose(): Tone.NoiseSynth;
        triggerAttack(time?: Tone.Time, velocity?: number): Tone.NoiseSynth;
        triggerAttackRelease(duration: Tone.Time, time?: Tone.Time, velocity?: number): Tone.NoiseSynth;
        triggerRelease(time?: Tone.Time): Tone.NoiseSynth;
    }

    var Normalize: {
        new(min?: number, max?: number): Tone.Normalize;
    };

    interface Normalize extends Tone.SignalBase {
        max: number;
        min: number;
        dispose(): Tone.Normalize;
    }

    var Note: {
        new(channel: number | string, time: Tone.Time, value: any): Tone.Note;
    };

    interface Note {
        value: any;
        parseScore(score: Object): Tone.Note[];
        route(channel: string | number, callback?: (e: any)=>any): void;
        unroute(channel: string | number, callback?: (e: any)=>any): void;
        dispose(): Tone.Note;
    }

    function now(): Tone.Time;

    var OmniOscillator: {
        new(frequency?: Tone.Frequency, type?: string): Tone.OmniOscillator;
    };

    interface OmniOscillator extends Tone.Source {
        detune: Tone.Signal;
        frequency: Tone.Signal;
        modulationFrequency: Tone.Signal;
        phase: number;
        type: string;
        width: Tone.Signal;
        dispose(): Tone.OmniOscillator;
    }

    var OR: {
        new(inputCount?:number): Tone.OR;
    };

    interface OR extends Tone.SignalBase {
        dispose(): Tone.OR;
    }

    var Oscillator: {
        new(frequency?: any, type?: string): Tone.Oscillator;
    };

    interface Oscillator extends Tone.Source {
        detune: Tone.Signal;
        frequency: Tone.Signal;
        phase: number;
        type: string;
        dispose(): Tone.Oscillator;
        syncFrequency(): Tone.Oscillator;
        unsyncFrequency(): Tone.Oscillator;
        toMaster(): Tone.Oscillator;
    }

    var Panner: {
        new(initialPan?: number): Tone.Panner;
    };

    interface Panner extends Tone {
        pan: Tone.Signal;
        dispose(): Tone.Panner;
    }

    var PanVol: {
        new(pan?: number, volume?: number): Tone.PanVol;
    };

    interface PanVol extends Tone {
        output: GainNode;
        volume: Tone.Signal;
        dispose(): Tone.PanVol;
    }

    var Phaser: {
        new(rate?: any, depth?: number, baseFrequency?: number): Tone.Phaser;
    };

    interface Phaser extends Tone.StereoEffect {
        baseFrequency: number;
        depth: number;
        frequency: Tone.Signal;
        dispose(): Tone.Phaser;
    }

    var PingPongDelay: {
        new(delayTime?: any, feedback?: number): Tone.PingPongDelay;
    };

    interface PingPongDelay extends Tone.StereoXFeedbackEffect {
        delayTime: Tone.Signal;
        dispose(): Tone.PingPongDelay;
    }

    var PitchShift: {
        new(pitch?: any): Tone.PitchShift;
    }

    interface PitchShift extends Tone.FeedbackEffect {
        pitch: number;
        windowSize: number;
    }

    var Player: {
        new(url?: string | AudioBuffer, onload?: (e: any)=>any): Tone.Player;
    };

    interface Player extends Tone.Source {
        autostart: boolean;
        buffer: Tone.Buffer | AudioBuffer;
        duration: number;
        loop: boolean;
        loopEnd: Tone.Time;
        loopStart: Tone.Time;
        playbackRate: Tone.Signal;
        retrigger: boolean;
        reverse: boolean;
        startPosition: Tone.Time;
        dispose(): Tone.Player;
        load(url:string | AudioBuffer, callback?:(e: any)=>any):  Tone.Player;
        setLoopPoints(loopStart:Tone.Time, loopEnd:Tone.Time): Tone.Player;
        start(startTime?: Tone.Time, offset?: Tone.Time, duration?: Tone.Time): Tone.Player;
        toMaster(): Tone.Player;
    }

    var PluckSynth : {
        new(options?: Object): Tone.PluckSynth;
    };

    interface PluckSynth extends Tone.Instrument {
        attackNoise: number;
        dampening: Tone.Signal;
        resonance: Tone.Signal;
        dispose(): Tone.PluckSynth;
        triggerAttack(note: string | number, time?: Tone.Time): Tone.PluckSynth;
    }

    var PolySynth : {
        new(voicesAmount?: any, voice?: any): Tone.PolySynth;
    };

    interface PolySynth extends Tone.Instrument {
        voices: any[];
        dispose(): Tone.PolySynth;
        get(params?: any[]) : any;
        set(params: Object) : any;
        set(params: string, value: number) : any;
        setPreset(presetName: string): Tone.PolySynth;
        triggerAttack(value: any, time?: Tone.Time, velocity?: number): Tone.PolySynth;
        triggerAttackRelease(value: any, duration: Tone.Time, time?: Tone.Time, velocity?: number): Tone.PolySynth;
        triggerRelease(value: any, time?: Tone.Time): Tone.PolySynth;
        toMaster(): Tone.PolySynth;
    }

    var Pow: {
        new(exp: number): Tone.Pow;
    };

    interface Pow extends Tone.SignalBase {
        value: number;
        dispose(): Tone.Pow;
    }

    var PulseOscillator:  {
        new(frequency?: number, width?:number): Tone.PulseOscillator;
    };

    interface PulseOscillator extends Tone.Oscillator {
        detune: Tone.Signal;
        frequency: Tone.Signal;
        phase: number;
        width: Tone.Signal;
        dispose(): Tone.PulseOscillator;
    }

    var PWMOscillator:  {
        new(frequency?: Tone.Frequency, modulationFrequency?: number): Tone.PWMOscillator;
    };

    interface PWMOscillator extends Tone.Oscillator {
        detune: Tone.Signal;
        frequency: Tone.Signal;
        modulationFrequency :Tone.Signal;
        phase: number;
        width: Tone.Signal;
        dispose(): Tone.PWMOscillator;
    }

    var Route: {
        new(outputCount?: number): Tone.Route;
    };

    interface Route extends Tone.SignalBase {
        gate: Tone.Signal;
        dispose(): Tone.Route;
        select(which?: number, time?: Tone.Time): Tone.Route;
    }

    var Sampler: {
        new(urls?: any, options?: Object): Tone.Sampler;
    };

    interface Sampler extends Tone.Instrument {
        envelope: Tone.Envelope;
        filter: BiquadFilterNode;
        filterEnvelope: Tone.Envelope;
        pitch: number;
        player: Tone.Player;
        sample: any;
        dispose(): Tone.Sampler;
        triggerAttack(sample?: string, time?: Tone.Time, velocity?: number): Tone.Sampler;
        triggerRelease(time?: Tone.Time): Tone.Sampler;
    }

    var SimpleEnvelope: {
        new(attack: any, decay?: Tone.Time, sustain?: number, release?: Tone.Time): Tone.SimpleEnvelope;
    };

    interface SimpleEnvelope extends Tone {
        attack: Tone.Time;
        attackCurve: string;
        decay: Tone.Time;
        decayCurve: string;
        release: Tone.Time;
        releaseCurve: string;
        sustain: number;
        dispose(): Tone.SimpleEnvelope;
        triggerAttack(time?: number, velocity?: number): Tone.SimpleEnvelope;
        triggerAttackRelease(duration: Tone.Time, time?: number, velocity?: number): Tone.SimpleEnvelope;
        triggerRelease(time?: number): Tone.SimpleEnvelope;
    }

    var Simpler: {
        new(urls?: any, options?: Object): Tone.Simpler;
    };

    interface Simpler extends Tone.Instrument {
        envelope: Tone.AmplitudeEnvelope;
        player: Tone.Player;
        dispose(): Tone.Simpler;
        triggerAttack(time?: Tone.Time, offset?: Tone.Time, duration?: Tone.Time, velocity?: number): Tone.Simpler;
        triggerRelease(time?: Tone.Time): Tone.Simpler;
        triggerAttackRelease(length: Tone.Time, time?: Tone.Time, offset?: Tone.Time, duration?: Tone.Time, velocity?: number): Tone.Simpler;
    }

    var Scale: {
        new(outputMin?: number, outputMax?: number): Tone.Scale;
    };

    interface Scale extends Tone.SignalBase {
        max: number;
        min: number;
        dispose(): Tone.Scale;
    }

    var ScaledEnvelope: {
        new(attack?: any, decay?: Tone.Time, sustain?: number, release?: Tone.Time): Tone.ScaledEnvelope;
    };

    interface ScaledEnvelope extends Tone.Envelope {
        exponent: number;
        max: number;
        min: number;
        dispose(): Tone.ScaledEnvelope;
    }

    var ScaleExp: {
        new(outputMin?: number, outputMax?: number, exponent?: number): Tone.ScaleExp;
    };

    interface ScaleExp extends Tone.SignalBase {
        exponent: number;
        max: number;
        min: number;
        dispose(): Tone.ScaleExp;
    }

    var Select: {
        new(sourceCount?: number): Tone.Select;
    };

    interface Select extends Tone.SignalBase {
        gate: Tone.Signal;
        dispose(): Tone.Select;
        select(which: number, time?: Tone.Time): Tone.Select;
    }

    module Signal {
        interface Unit{}
        interface Type{}
    }

    var Signal: {
        new(value?: number | AudioParam, units?: Tone.Signal.Unit): Tone.Signal;
    };

    interface Signal extends Tone.SignalBase {
        units: Tone.Signal.Type;
        value: any; //Tone.Time | Tone.Frequency | number;
        cancelScheduledValues(startTime: Tone.Time): Tone.Signal;
        dispose(): Tone.Signal;
        exponentialRampToValue(value: number, rampTime: Tone.Time): Tone.Signal;
        exponentialRampToValueAtTime(value: number, endTime: Tone.Time): Tone.Signal;
        linearRampToValueAtTime(value: number, endTime: Tone.Time): Tone.Signal;
        linearRampToValue(value: number, rampTime: Tone.Time): Tone.Signal;
        rampTo(value: number, rampTime: Tone.Time): Tone.Signal;
        setRampPoint(now?: number): Tone.Signal;
        setTargetAtTime(value: number, startTime: Tone.Time, timeConstant: number): Tone.Signal;
        setValueAtTime(value: number, time: Tone.Time): Tone.Signal;
        setValueCurveAtTime(values: number[], startTime: Tone.Time, duration: Tone.Time): Tone.Signal;
    }

    var SignalBase: {
        new(): Tone.SignalBase;
    };

    interface SignalBase extends Tone {
        connect(node: AudioParam | AudioNode | Tone.Signal | Tone, outputNumber?: number, inputNumber?: number): Tone.SignalBase;
    }

    var Source: {
        new(): Tone.Source;
    };

    interface Source extends Tone {
        State: string;
        onended: ()=>any;
        state: Tone.Source.State;
        volume: Tone.Signal;
        dispose(): Tone.Source;
        start(time?: Tone.Time): Tone.Source;
        stop(time?: Tone.Time): Tone.Source;
        sync(delay?: Tone.Time): Tone.Source;
        unsync(): Tone.Source;
    }

    module Source {
        interface State{}
    }

    var Split: {
        new(): Tone.Split;
    };

    interface Split extends Tone {
        left: GainNode;
        right: GainNode;
        dispose(): Tone.Split;
    }

    var StereoEffect: {
        new(): Tone.StereoEffect;
    };

    interface StereoEffect extends Tone.Effect {
        effectReturnL: GainNode;
        effectReturnR: GainNode;
        dispose(): Tone.StereoEffect;
    }

    var StereoFeedbackEffect: {
        new(): Tone.StereoFeedbackEffect;
    };

    interface StereoFeedbackEffect extends Tone.FeedbackEffect {
        feedback: Tone.Signal;
        dispose(): Tone.StereoFeedbackEffect;
    }

    var StereoWidener: {
        new(width?: any): Tone.StereoWidener;
    };

    interface StereoWidener extends Tone.MidSideEffect {
        width: Tone.Signal;
        dispose(): Tone.StereoWidener;
    }

    var StereoXFeedbackEffect: {
        new(): Tone.StereoXFeedbackEffect;
    };

    interface StereoXFeedbackEffect extends Tone.FeedbackEffect {
        feedback: Tone.Signal;
        dispose(): Tone.StereoXFeedbackEffect;
    }

    var Switch: {
        new(): Tone.Switch;
    };

    interface Switch extends Tone.SignalBase {
        gate: Tone.Signal;
        close(time: Tone.Time): Tone.Switch;
        dispose(): Tone.Switch;
        open(time: Tone.Time): Tone.Switch
    }

    interface Time{}

    var Transport:  {
        new(): Tone.Transport;
        bpm: Tone.Signal;
        start(time?: Tone.Time): Tone.Transport;
        stop(time?: Tone.Time): Tone.Transport;
        schedule(callback: (t: any) => any, time: Tone.Time): number;
    };

    interface Transport extends Tone {
        bpm: Tone.Signal;
        loop: boolean;
        loopEnd: Tone.Time;
        loopStart: Tone.Time;
        position: string;
        state: TransportState;
        swing: number;
        swingSubdivision: Tone.Time;
        timeSignature: number;
        clearInterval(rmInterval: number): boolean;
        clearIntervals(): void;
        clearTimeline(timelineID: number): boolean;
        clearTimelines(): void;
        clearTimeout(timeoutID: number): boolean;
        clearTimeouts(): void;
        dispose(): Tone.Transport;
        nextBeat(subdivision?: string): number;
        pause(time: Tone.Time): Tone.Transport;
        setInterval(callback: (e: any)=>any, interval: Tone.Time): number;
        setLoopPoints(startPosition: Tone.Time, endPosition: Tone.Time): Tone.Transport;
        setTimeline(callback: (e: any)=>any, timeout: Tone.Time): number;
        setTimeout(callback: (e: any)=>any, time: Tone.Time): number;
        start(time?: Tone.Time, offset?: Tone.Time): Tone.Transport;
        stop(time?: Tone.Time): Tone.Transport;
        syncSignal(signal: Tone.Signal, ratio?: number): Tone.Transport;
        syncSource(source: Tone.Source, delay: Tone.Time): Tone.Transport;
        unsyncSignal(signal: Tone.Signal): Tone.Transport;
        unsyncSource(source: Tone.Source): Tone.Transport;
    }

    interface TransportState {}

    var Tremolo: {
        new(frequency?: any, depth?: number): Tone.Tremolo;
    };

    interface Tremolo extends Tone.StereoEffect {
        depth: Tone.Signal;
        frequency: Tone.Signal;
        spread: number;
        type: string;
        dispose(): Tone.Tremolo;
        start(): Tone.Tremolo;
        stop(): Tone.Tremolo;
        sync(): Tone.Tremolo;
        unsync(): Tone.Tremolo;
    }

    var WaveShaper: {
        new(mapping?: any, bufferLen?: number): Tone.WaveShaper;
    };

    interface WaveShaper extends Tone.SignalBase {
        curve: number[];
        oversample: string;
    }

    var Event: {
        new() : Tone.Event;
    }

    interface Event extends Tone {
        dispose(): Tone.Split;
        start(time?: Tone.Time): Tone.Event;
        value: any;
    }

    var Part: {
        new(callback?:(time: number, value: number)=>any, events?: any) : Tone.Part;
    }

    interface Part extends Tone.Event {
        loop: boolean | number;
        start(time?: Tone.Time): Tone.Event;
    }

    var MultiPlayer: {
        new(buffers: Tone.Buffers | string[] | pxsim.Map<string>, callback: (player: Tone.MultiPlayer) => any) : Tone.MultiPlayer;
    }

    interface MultiPlayer extends Tone {
        toMaster(): Tone.MultiPlayer;
        start(bufferName: string): Tone.MultiPlayer;
    }

    var Sequence: {
        new(callback: (time: Tone.Time, note: string | number) => any, events: string[] | string[][] | number[], subdivision: string) : Tone.Sequence;
    }

    interface Sequence extends Tone.Part {
        start(time?: Tone.Time): Tone.Part;
        stop(time?: Tone.Time): Tone.Part;
        loop: boolean | number;
        at(index: number): Tone.Event | string | Tone.Sequence;
        at(index: number, note: string): void;
        state: string;
    }
}