﻿using System;
using System.Collections.Generic;
using System.Text;

namespace EcommerceMenuSystem
{
    public abstract class Screen
    {
        protected int choice = -1;
        protected int noOfPaths;

        public abstract void Run();
    }
}
