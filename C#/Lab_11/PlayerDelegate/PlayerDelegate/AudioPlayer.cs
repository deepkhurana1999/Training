using System;
using System.Collections.Generic;
using System.Text;

namespace PlayerDelegate
{
    class AudioPlayer
    {
        private int AudioPlayerStatus;

        public int PlayAudioFile(string str)
        {
            Console.Write("Audio Player: ");

            if (str != " mp3")
                AudioPlayerStatus = -1;
            else
                AudioPlayerStatus = 0;
            return AudioPlayerStatus;
        }
    }
}
