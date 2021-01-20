    var waveform = window.Waveform();
    var message = document.getElementById('message');
    var config, conversation;
    var userdata;
    message.textContent = 'Passive';
    console.log("inside advance conversation js");
    export default function js_advanceconversation() {

        //AWS.config.credentials = new AWS.Credentials(document.getElementById('ACCESS_ID').value, document.getElementById('SECRET_KEY').value, null);
        //AWS.config.region = 'us-east-1';
        
        config = {
            lexConfig: { botName: "jk"},//document.getElementById('BOT').value }
            profile: userdata
        };

        conversation = new LexAudio.conversation(config, function (state) {
            message.textContent = state + '...';
	    console.log('state changed',message.textContent);
            if (state === 'Listening') {
                waveform.prepCanvas();
            }
            if (state === 'Sending') {
                waveform.clearCanvas();
            }
        }, function (data) {
            message.textContent = 'transcribed to ...' + data;
            //console.log('Transcript: ', data.inputTranscript, ", Response: ", data.message);
        }, function (error) {
            message.textContent = error;
        }, function (timeDomain, bufferLength) {
            waveform.visualizeAudioBuffer(timeDomain, bufferLength);
        });
        conversation.advanceConversation();
    };
