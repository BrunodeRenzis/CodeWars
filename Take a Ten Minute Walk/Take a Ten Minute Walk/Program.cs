using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Take_a_Ten_Minute_Walk
{
    public class Kata
    {
        public static bool IsValidWalk(string[] walk)
        {
            if (walk.Length != 10)
            {
                return false;
            }
            else
            {
                foreach (string letra in walk)
                {
                    if (walk[0] == walk[2] && walk[1] == walk[3])
                    {
                        return true;
                    }
                }
                return false;
            }
        }
    }
}
