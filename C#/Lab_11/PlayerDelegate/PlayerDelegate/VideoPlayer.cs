using System;
using System.Collections.Generic;
using System.Text;

namespace PlayerDelegate
{
    class VideoPlayer
    {
        private int videoPlayerStatus;
        public int PlayVideoFile(string str)
        {
            Console.Write("Video Player: ");
            if (str != "mkv")
                videoPlayerStatus = -1;
            else
                videoPlayerStatus = 0;
            return videoPlayerStatus;
        }
    }
}
