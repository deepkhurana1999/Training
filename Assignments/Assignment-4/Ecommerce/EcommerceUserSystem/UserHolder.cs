using IItem;
using System;
using System.Collections.Generic;
using System.Text;

namespace EcommerceUserSystem
{
    /// <summary>
    /// Class holding the object of the current user logged in the system.
    /// </summary>
    internal static class UserHolder
    {
        public static User UserObject { get; set; }
    }
}
