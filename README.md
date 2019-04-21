# Pagination-Algorithm

This is a simple pagination algorithm implementation written for Angular app in typescript. It will produce pagination with first, last and in-between numbers with elapsed separators defined by the delta constant.

**Example Output:**
Delta: 2, Pages: 9
<ul>
<li><b><i>1</i></b>23…9</li>
<li>1<b><i>2</i></b>34…9</li>
<li>12<b><i>3</i></b>45…9</li>
<li>123<b><i>4</i></b>56…9</li>
<li>1…34<b><i>5</i></b>67…9</li>
<li>1…45<b><i>6</i></b>789</li>
<li>1…56<b><i>7</i></b>89</li>
<li>1…67<b><i>8</i></b>9</li>
<li>1…78<b><i>9</i></b></li>
</ul>
