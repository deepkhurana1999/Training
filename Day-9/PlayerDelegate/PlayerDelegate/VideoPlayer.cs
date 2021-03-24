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
            Console.WriteLine("Video Player");
            if (str != "mp4")
                videoPlayerStatus = -1;
            else
                videoPlayerStatus = 0;
            return videoPlayerStatus;
        }
    }
}
