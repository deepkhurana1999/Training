using System;

namespace PlayerDelegate
{
    class Program
    {
        static void Main(string[] args)
        {
            MediaStorage msApp = new MediaStorage();
            VideoPlayer vp = new VideoPlayer();
            AudioPlayer ap = new AudioPlayer();

            MediaStorage.PlayerMedia reportDelegate = new MediaStorage.PlayerMedia(ap.PlayAudioFile);
            msApp.ReportResult(reportDelegate, "mp3");
            reportDelegate = vp.PlayVideoFile;
            msApp.ReportResult(reportDelegate, "mkv");
            //Console.ReadKey();
        }
    }
}
