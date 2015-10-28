##Subheader

**Bubble sort**

```C#
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sorting {

    public class BubbleSorter&lt;T&gt;: Sorter&lt;T&gt; where T: IComparable {

        public BubbleSorter(T[] array)
            : base(array) { }

        public override void Sort() {
            bool swapped;

            for(int i = 0; i &lt; Array.Length; i++) {
                swapped = false;

                for(int j = Array.Length - 1; j &gt; i; j--) {
                    if(Array[j - 1].CompareTo(Array[j]) &gt; 0) {
                        Swap(j - 1, j);
                        swapped = true;
                    }
                }

                if(!swapped)
                    break;
            }
        }

    }

}
```
