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

            MediaStorage.PlayerMedia del = new MediaStorage.PlayerMedia(vp.PlayVideoFile);
            del += ap.PlayAudioFile;
            msApp.ReportResult(del, "mp3");
        }
    }
}
