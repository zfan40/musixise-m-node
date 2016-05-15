$(function() {
    // Initialize variables
    var $window = $(window);

    //sprite animation robbed from radiohead mainpage
    var the_light = '#ffff00';
    var s = false;
    var f = 0;

    var socket = io('http://io.musixise.com');
    var hisname = location.href.match(/.*?stage\/(.*)/)[1];

    // timing params
    var timeDiff = 0; //performer start time vs. audience enter 
    var latency = 1500; //5000 milliseconds
    var tt = 0; // total time, from the first two params

    var hasFirstNoteArrived = false; //use first Note to set late 


    function generateLight() {
        setInterval(function() {
            var a = '' + (parseInt(Math.random() * 255));
            var b = '' + (parseInt(Math.random() * 255));
            var c = '' + (parseInt(Math.random() * 255));
            var dice = parseInt(Math.random() * 3);
   
                the_light = 'rgb('+a+','+b+','+c+')';

        }, 10000);
    }

    function letThereBeLight() {
        $('body').css({ backgroundColor: the_light });
        $('body').stop().animate({ backgroundColor: "#000" }, 400);
    }

    function r() {
        $('#bgi').width($(window).width() * 21);
        $('#bgi').height($(window).height() * 21);
    }
    // $('#bgi').load(function() {
    $('#bgi').css('visibility', 'visible');
    r();
    generateLight();
    $(window).resize(function() { r(); });
    setInterval(function() {
        $('#bg').css('left', '-' + ((f % 21) * $(window).width()) + 'px');
        $('#bg').css('top', '-' + ((Math.floor(f / 21)) * $(window).height()) + 'px');
        f = f + 1;
        if (f == 410) f = 0;
    }, 120);
    socket.on('connect', function() {
        //auto running;
        console.log('enter stage ' + hisname);
        socket.emit('enter stage', hisname);
    });
    socket.on('tocmsg', function(data) {
        var note_data = JSON.parse(data.message);
        if (note_data.midi_msg[0]==144)
            letThereBeLight()
        if (!hasFirstNoteArrived && note_data.midi_msg) {
            hasFirstNoteArrived = true;
            timeDiff = note_data.time - performance.now();
            console.log('two side timeDiff: ' + timeDiff);

            // console.log(tt);
        }
        console.log('note time from musixiser: ' + note_data.time);
        tt = note_data.time - timeDiff + latency;

        //第一种synth方案,不传入时间信息，setTimeout控制synth时间
        setTimeout(function() {
            // Synth.handleMidiMsg(note_data.midi_msg, note_data.timbre);
            // if (note_data.midi_msg[0]==144)
            // {letThereBeLight()}
        }, tt - performance.now());
        // Synth.handleMidiMsg(note_data.midi_msg, note_data.timbre)    //这行复原啊！！！！！！
            //第二种synth方案,传入时间信息，synth自己管理时间
            // Synth.handleMidiMsg(note_data.midi_msg, note_data.timbre, tt / 1000.0);

    });
    socket.on('no stage', function() {
        $('.stage-banner').html('舞台并不存在,3s后返回');
        var timer = 3;
        setInterval(function() {
            if (timer != 1) {
                timer--;
                $('.stage-banner').html('舞台并不存在, ' + timer + 's后返回');
            } else {
                location.href = '//m.musixise.com';
            }
        }, 1000);
    });

    //模拟变底色
    // $('body').on('keydown', function() {
    //     $('body').css({ backgroundColor: "#ee2345" });
    //     $('body').stop().animate({ backgroundColor: "#000" }, 1000);
    // })

});