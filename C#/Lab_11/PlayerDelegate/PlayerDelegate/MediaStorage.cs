using System;
using System.Collections.Generic;
using System.Text;

namespace PlayerDelegate
{
    class MediaStorage
    {
        public delegate int PlayerMedia(string str);

        public void ReportResult(PlayerMedia pmc, string str)
        {
            int status = pmc(str);
            if (status == 0)
                Console.WriteLine("Player run successfully");
            else
                Console.WriteLine("Format not supported");

        }
    }
}
