Subheader
---------

**Bucket sort**, or bin sort, is a sorting algorithm that works by partitioning an array into a number of buckets.

````C#
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sorting {

    public class BucketSorter: Sorter&lt;int&gt; {

        private readonly int _bucketCount;

        private int BucketCount {
            get { return _bucketCount; }
        }

        public BucketSorter(int[] array, int bucketCount): base(array) {
            _bucketCount = bucketCount;
        }

        public override void Sort() {
            List&lt;int&gt;[] buckets = PrepareBuckets();
            int min = Array.Min();
            int max = Array.Max();
            
            DistributeToBuckets(buckets, min, max);

            SortAndMerge(buckets);
        }

        private List&lt;int&gt;[] PrepareBuckets() {
            var buckets = new List&lt;int&gt;[BucketCount];
            for(int i = 0; i &lt; BucketCount; i++) {
                buckets[i] = new List&lt;int&gt;();
            }
            return buckets;
        }

        private void DistributeToBuckets(List&lt;int&gt;[] buckets, int min, int max) {
            double bucketSize = (max - min + 1) / (double)BucketCount;

            foreach(int num in Array) {
                buckets[(int)((num - min) / bucketSize)].Add(num);
            }
        }

        private void SortAndMerge(List&lt;int&gt;[] buckets) {
            int index = 0;
            foreach(var bucket in buckets) {
                bucket.Sort();

                foreach(int num in bucket) {
                    Array[index++] = num;
                }
            }
        }
    }
}
````
