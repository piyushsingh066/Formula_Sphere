/* ── SWITCH TAB ── */
function switchTab(id, el) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.m-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('tab-' + id).classList.add('active');
  el.classList.add('active');
}

/* ── DATA ── */
const CATS = [
  { id: '2d', label: '2D Shapes', color: '#3b82f6', cls: 'chip-b' },
  { id: '3d', label: '3D Shapes', color: '#8b5cf6', cls: 'chip-p' },
  { id: 'trig', label: 'Trigonometry', color: '#10b981', cls: 'chip-g' },
  { id: 'alg', label: 'Algebra', color: '#f59e0b', cls: 'chip-a' },
  { id: 'seq', label: 'Sequences', color: '#ef4444', cls: 'chip-r' },
  { id: 'code', label: 'Coding Math', color: '#06b6d4', cls: 'chip-c' },
  { id: 'bits', label: 'Bit Manipulation', color: '#f59e0b', cls: 'chip-a' },
  { id: 'stats', label: 'Statistics', color: '#ec4899', cls: 'chip-k' },
  { id: 'calc', label: 'Calculus', color: '#3b82f6', cls: 'chip-b' },
  { id: 'cplx', label: 'Complexity', color: '#8b5cf6', cls: 'chip-p' },
  { id: 'coord', label: 'Coordinate Geo', color: '#10b981', cls: 'chip-g' },
  { id: 'matrix', label: 'Matrices & Vectors', color: '#06b6d4', cls: 'chip-c' },
  { id: 'discrete', label: 'Discrete Math', color: '#ec4899', cls: 'chip-k' },
  { id: 'engg', label: 'Engineering Math', color: '#f59e0b', cls: 'chip-a' },
];
const CAT_ICONS = { '2d': '▭', '3d': '◈', 'trig': 'sin', 'alg': 'xⁿ', 'seq': 'Σ', 'code': '{}', 'bits': '01', 'stats': 'σ', 'calc': '∫', 'cplx': 'O(n)', 'coord': '⊕', 'matrix': '[M]', 'discrete': '⋃', 'engg': 'ℒ' };
const CAT_SUBTITLES = { '2d': 'Area · Perimeter · Diagonal', '3d': 'Volume · Surface Area', 'trig': 'Ratios · Identities · Laws', 'alg': 'Equations · Exponents · Logs', 'seq': 'Fibonacci · Sums · Primes', 'code': 'Algorithms · DP · Patterns', 'bits': 'Operators · Tricks · Bases', 'stats': 'Probability · Distributions', 'calc': 'Derivatives · Integrals · Limits', 'cplx': 'Big-O · Recurrences', 'coord': 'Lines · Circles · Conics', 'matrix': 'Operations · Vectors · Eigen', 'discrete': 'Sets · Relations · Logic · Graphs', 'engg': 'Laplace · Fourier · Z-Transforms' };

const SECTIONS = [
  { catId: '2d', title: 'Square', tag: '2D', svg: '<rect x="6" y="6" width="32" height="32" fill="none" stroke="#3b82f6" stroke-width="2"/>', formulas: ['Area = a²', 'Perimeter = 4a', 'Diagonal = a√2', 'Side from area: a = √Area'], note: 'a = side length' },
  { catId: '2d', title: 'Rectangle', tag: '2D', svg: '<rect x="2" y="10" width="40" height="24" fill="none" stroke="#3b82f6" stroke-width="2"/>', formulas: ['Area = l × w', 'Perimeter = 2(l + w)', 'Diagonal = √(l² + w²)'], note: 'l = length, w = width' },
  { catId: '2d', title: 'Circle', tag: '2D', svg: '<circle cx="22" cy="22" r="18" fill="none" stroke="#3b82f6" stroke-width="2"/><line x1="22" y1="22" x2="40" y2="22" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="3"/>', formulas: ['Area = πr²', 'Circumference = 2πr', 'Diameter d = 2r', 'r from area: r = √(Area/π)'], note: 'r = radius, π ≈ 3.14159' },
  { catId: '2d', title: 'Triangle', tag: '2D', svg: '<polygon points="22,3 43,41 1,41" fill="none" stroke="#3b82f6" stroke-width="2"/><line x1="22" y1="3" x2="22" y2="41" stroke="#3b82f6" stroke-width="1" stroke-dasharray="3"/>', formulas: ['Area = ½ × b × h', 'Perimeter = a + b + c', "Heron's: s=(a+b+c)/2, Area=√[s(s-a)(s-b)(s-c)]", 'Angles sum = 180°'], note: 'b = base, h = height' },
  { catId: '2d', title: 'Right Triangle', tag: '2D', formulas: ['Pythagoras: c² = a² + b²', 'Hypotenuse: c = √(a²+b²)', 'Area = ½ × a × b', 'sin A = a/c, cos A = b/c, tan A = a/b'], note: 'c = hypotenuse' },
  { catId: '2d', title: 'Equilateral Triangle', tag: '2D', formulas: ['Area = (√3/4) × a²', 'Perimeter = 3a', 'Height h = (√3/2) × a', 'Each angle = 60°'], note: 'a = side length' },
  { catId: '2d', title: 'Trapezoid', tag: '2D', formulas: ['Area = ½(a+b) × h', 'Perimeter = a+b+c+d', 'Midsegment = (a+b)/2'], note: 'a,b = parallel sides, h = height' },
  { catId: '2d', title: 'Parallelogram', tag: '2D', formulas: ['Area = b × h', 'Area = ab·sinθ', 'Perimeter = 2(a+b)', 'd₁²+d₂² = 2(a²+b²)'] },
  { catId: '2d', title: 'Rhombus', tag: '2D', formulas: ['Area = (d₁ × d₂) / 2', 'Area = a²·sinθ', 'Perimeter = 4a', 'Side: a = √((d₁/2)²+(d₂/2)²)'], note: 'd₁,d₂ = diagonals' },
  { catId: '2d', title: 'Ellipse', tag: '2D', formulas: ['Area = π × a × b', 'Perimeter ≈ π(3(a+b)−√((3a+b)(a+3b)))', 'Eccentricity e = √(1−(b/a)²)'], note: 'a = semi-major, b = semi-minor' },
  { catId: '2d', title: 'Regular Polygon', tag: '2D', formulas: ['Area = (n×s²) / (4×tan(π/n))', 'Interior angle = (n−2)×180/n', 'Exterior angle = 360/n', 'Perimeter = n × s'], note: 'n = sides, s = side length' },
  { catId: '2d', title: 'Sector & Segment', tag: '2D', formulas: ['Sector area = ½r²θ', 'Arc length L = rθ', 'Segment area = ½r²(θ−sinθ)', 'Chord = 2r·sin(θ/2)'], note: 'θ = angle in radians' },
  { catId: '2d', title: 'Annulus (Ring)', tag: '2D', formulas: ['Area = π(R²−r²)', 'Area = π(R+r)(R−r)'], note: 'R = outer radius, r = inner radius' },
  { catId: '3d', title: 'Cube', tag: '3D', formulas: ['Volume = a³', 'Surface Area = 6a²', 'Face Diagonal = a√2', 'Space Diagonal = a√3'], note: 'a = edge length' },
  { catId: '3d', title: 'Cuboid (Box)', tag: '3D', formulas: ['Volume = l × w × h', 'Surface Area = 2(lw+lh+wh)', 'Diagonal = √(l²+w²+h²)'], note: 'l = length, w = width, h = height' },
  { catId: '3d', title: 'Sphere', tag: '3D', formulas: ['Volume = (4/3)πr³', 'Surface Area = 4πr²', 'r from volume: r = ∛(3V/4π)'] },
  { catId: '3d', title: 'Hemisphere', tag: '3D', formulas: ['Volume = (2/3)πr³', 'Curved SA = 2πr²', 'Total SA = 3πr²'] },
  { catId: '3d', title: 'Cylinder', tag: '3D', formulas: ['Volume = πr²h', 'Curved SA = 2πrh', 'Total SA = 2πr(r+h)'], note: 'r = radius, h = height' },
  { catId: '3d', title: 'Cone', tag: '3D', formulas: ['Volume = (1/3)πr²h', 'Slant height l = √(r²+h²)', 'Curved SA = πrl', 'Total SA = πr(r+l)'] },
  { catId: '3d', title: 'Square Pyramid', tag: '3D', formulas: ['Volume = (1/3) × b² × h', 'Slant l = √(h²+(b/2)²)', 'Lateral SA = 2bl', 'Total SA = b²+2bl'], note: 'b = base side, h = height' },
  { catId: '3d', title: 'Torus (Donut)', tag: '3D', formulas: ['Volume = 2π²Rr²', 'Surface Area = 4π²Rr'], note: 'R = major radius, r = tube radius' },
  { catId: '3d', title: 'Frustum', tag: '3D', formulas: ['Volume = (πh/3)(R²+r²+Rr)', 'Slant: l = √(h²+(R−r)²)', 'Lateral SA = π(R+r)l'], note: 'R = large radius, r = small radius' },
  { catId: '3d', title: 'Ellipsoid', tag: '3D', formulas: ['Volume = (4/3)πabc'], note: 'a, b, c = semi-axes' },
  { catId: '3d', title: 'Prism (any base)', tag: '3D', formulas: ['Volume = Base Area × h', 'Lateral SA = Perimeter × h', 'Total SA = 2×Base + Lateral SA'] },
  { catId: 'trig', title: 'SOH CAH TOA', tag: 'Trig', formulas: ['sin θ = Opposite / Hypotenuse', 'cos θ = Adjacent / Hypotenuse', 'tan θ = Opposite / Adjacent', 'cosec θ = 1/sin θ', 'sec θ = 1/cos θ', 'cot θ = 1/tan θ'] },
  { catId: 'trig', title: 'Pythagorean Identities', tag: 'Trig', formulas: ['sin²θ + cos²θ = 1', '1 + tan²θ = sec²θ', '1 + cot²θ = cosec²θ'] },
  { catId: 'trig', title: 'Addition Formulas', tag: 'Trig', formulas: ['sin(A±B) = sinA cosB ± cosA sinB', 'cos(A±B) = cosA cosB ∓ sinA sinB', 'tan(A±B) = (tanA±tanB)/(1∓tanA tanB)'] },
  { catId: 'trig', title: 'Double & Half Angle', tag: 'Trig', formulas: ['sin 2A = 2 sinA cosA', 'cos 2A = cos²A − sin²A = 2cos²A−1', 'tan 2A = 2tanA/(1−tan²A)', 'sin(A/2) = √((1−cosA)/2)', 'cos(A/2) = √((1+cosA)/2)'] },
  { catId: 'trig', title: 'Laws of Sines & Cosines', tag: 'Trig', formulas: ['Sine: a/sinA = b/sinB = c/sinC', 'Cosine: a² = b²+c²−2bc·cosA', 'Area = ½ab·sinC'] },
  { catId: 'trig', title: 'Common Angles Table', tag: 'Trig', table: true, thead: ['Deg', 'Rad', 'sin', 'cos', 'tan'], rows: [['0°', '0', '0', '1', '0'], ['30°', 'π/6', '1/2', '√3/2', '1/√3'], ['45°', 'π/4', '√2/2', '√2/2', '1'], ['60°', 'π/3', '√3/2', '1/2', '√3'], ['90°', 'π/2', '1', '0', '∞'], ['180°', 'π', '0', '−1', '0'], ['270°', '3π/2', '−1', '0', '∞'], ['360°', '2π', '0', '1', '0']] },
  { catId: 'trig', title: 'Radian Conversions', tag: 'Trig', formulas: ['Radians = Degrees × π/180', 'Degrees = Radians × 180/π', '1 radian ≈ 57.2958°', 'Full circle = 2π rad = 360°'] },
  { catId: 'trig', title: 'Product-to-Sum', tag: 'Trig', formulas: ['sinA·sinB = ½[cos(A−B)−cos(A+B)]', 'cosA·cosB = ½[cos(A−B)+cos(A+B)]', 'sinA·cosB = ½[sin(A+B)+sin(A−B)]'] },
  { catId: 'alg', title: 'Quadratic Formula', tag: 'Algebra', big: 'x = (−b ± √(b² − 4ac)) / 2a', formulas: ['Δ = b²−4ac  (discriminant)', 'Δ>0 → 2 real roots', 'Δ=0 → 1 repeated root', 'Δ<0 → complex roots', 'Sum of roots = −b/a', 'Product of roots = c/a'] },
  { catId: 'alg', title: 'Exponent Laws', tag: 'Algebra', formulas: ['aᵐ × aⁿ = aᵐ⁺ⁿ', 'aᵐ / aⁿ = aᵐ⁻ⁿ', '(aᵐ)ⁿ = aᵐⁿ', 'a⁰ = 1', 'a⁻ⁿ = 1/aⁿ', 'a^(1/n) = ⁿ√a', '(ab)ⁿ = aⁿbⁿ'] },
  { catId: 'alg', title: 'Logarithm Laws', tag: 'Algebra', formulas: ['log(ab) = log a + log b', 'log(a/b) = log a − log b', 'log(aⁿ) = n·log a', 'log_b(x) = ln(x)/ln(b)', 'log_b(1) = 0, log_b(b) = 1'] },
  { catId: 'alg', title: 'Binomial Theorem', tag: 'Algebra', formulas: ['(a+b)ⁿ = Σ C(n,k) aⁿ⁻ᵏ bᵏ', '(a+b)² = a²+2ab+b²', '(a−b)² = a²−2ab+b²', '(a+b)³ = a³+3a²b+3ab²+b³', 'a²−b² = (a+b)(a−b)', 'a³±b³ = (a±b)(a²∓ab+b²)'] },
  { catId: 'alg', title: 'Arithmetic Progression (AP)', tag: 'Algebra', formulas: ['Tₙ = a + (n−1)d', 'Sₙ = n/2 × (2a+(n−1)d)', 'Sₙ = n/2 × (first + last)'], note: 'a = first, d = common difference' },
  { catId: 'alg', title: 'Geometric Progression (GP)', tag: 'Algebra', formulas: ['Tₙ = a × rⁿ⁻¹', 'Sₙ = a(1−rⁿ)/(1−r)', 'S∞ = a/(1−r)  if |r|<1'], note: 'a = first, r = common ratio' },
  { catId: 'alg', title: 'Permutation & Combination', tag: 'Algebra', formulas: ['P(n,r) = n! / (n−r)!', 'C(n,r) = n! / (r!(n−r)!)', 'C(n,r) = C(n,n−r)', '0! = 1', 'Circular perm = (n−1)!'] },
  { catId: 'alg', title: 'Complex Numbers', tag: 'Algebra', formulas: ['z = a + bi,  i² = −1', '|z| = √(a²+b²)', 'Conjugate: z̄ = a − bi', 'Polar: z = r(cosθ+i sinθ)', 'Euler: eⁱθ = cosθ + i sinθ', 'eⁱπ + 1 = 0'] },
  { catId: 'seq', title: 'Fibonacci Sequence', tag: 'Seq', big: 'F(n) = F(n-1) + F(n-2)', formulas: ['F(0)=0, F(1)=1', 'Binet: F(n) = (φⁿ−ψⁿ)/√5', 'φ = (1+√5)/2 ≈ 1.6180339'], note: '0,1,1,2,3,5,8,13,21…' },
  { catId: 'seq', title: 'Golden Ratio', tag: 'Seq', big: 'φ = (1 + √5) / 2 ≈ 1.618034', formulas: ['φ² = φ + 1', '1/φ = φ − 1 ≈ 0.618', 'Rectangle: l/w = φ'] },
  { catId: 'seq', title: 'Sum Formulas', tag: 'Seq', formulas: ['Σk (1 to n) = n(n+1)/2', 'Σk² = n(n+1)(2n+1)/6', 'Σk³ = [n(n+1)/2]²', 'Σrᵏ = (1−rⁿ)/(1−r)'] },
  { catId: 'seq', title: 'GCD, LCM & Primes', tag: 'Seq', formulas: ['GCD(a,b) = GCD(b, a mod b)', 'LCM(a,b) = (a×b)/GCD(a,b)', 'Test prime: check divisors up to √n', 'Fermat: aⁿ⁻¹ ≡ 1 (mod n) if n prime'] },
  { catId: 'seq', title: 'Special Series', tag: 'Seq', formulas: ['Harmonic: Hₙ ≈ ln(n)+γ,  γ≈0.5772', 'e = Σ 1/n! = 1+1+½+⅙+…', 'π²/6 = Σ 1/n²', 'Catalan(n) = C(2n,n)/(n+1)'] },
  { catId: 'code', title: 'Fibonacci — Iterative O(n)', tag: 'Code', code: `function fib(n) {\n  let a = 0, b = 1;\n  for (let i = 0; i < n; i++) {\n    [a, b] = [b, a + b];\n  }\n  return a;\n}` },
  { catId: 'code', title: 'Fast Power — O(log n)', tag: 'Code', formulas: ['aⁿ = (a^(n/2))²  if n even', 'aⁿ = a × aⁿ⁻¹  if n odd'], code: `function pow(a, n) {\n  if (n == 0) return 1;\n  if (n % 2 == 0) return pow(a*a, n/2);\n  return a * pow(a, n-1);\n}` },
  { catId: 'code', title: 'GCD & LCM', tag: 'Code', formulas: ['GCD(a,0) = a', 'GCD(a,b) = GCD(b, a mod b)', 'LCM(a,b) = (a×b)/GCD(a,b)'], code: `const gcd = (a,b) => b===0 ? a : gcd(b, a%b);\nconst lcm = (a,b) => (a*b)/gcd(a,b);` },
  { catId: 'code', title: 'Modular Arithmetic', tag: 'Code', formulas: ['(a+b) mod m = ((a mod m)+(b mod m)) mod m', '(a×b) mod m = ((a mod m)×(b mod m)) mod m', 'Modular inverse: a⁻¹ = a^(m−2) mod m  (m prime)'] },
  { catId: 'code', title: 'Binary Search', tag: 'Code', formulas: ['mid = low + (high − low) / 2  ← avoids overflow'], code: `function bsearch(arr, target) {\n  let lo = 0, hi = arr.length - 1;\n  while (lo <= hi) {\n    let mid = lo + ((hi-lo)>>1);\n    if (arr[mid]===target) return mid;\n    arr[mid] < target ? lo=mid+1 : hi=mid-1;\n  }\n  return -1;\n}` },
  { catId: 'code', title: 'Prefix Sum', tag: 'Code', formulas: ['prefix[0] = 0', 'prefix[i] = prefix[i-1] + arr[i-1]', 'Range sum[l,r] = prefix[r+1] − prefix[l]', 'Difference array: range update in O(1)'] },
  { catId: 'code', title: 'Sieve of Eratosthenes', tag: 'Code', formulas: ['Time: O(n log log n)', 'Mark composites from p² up to n'], code: `function sieve(n) {\n  const p = new Array(n+1).fill(true);\n  p[0]=p[1]=false;\n  for (let i=2; i*i<=n; i++)\n    if (p[i]) for (let j=i*i; j<=n; j+=i) p[j]=false;\n  return p;\n}` },
  { catId: 'code', title: 'DP Recurrences', tag: 'Code', formulas: ['Knapsack: dp[i][w]=max(dp[i-1][w], val[i]+dp[i-1][w-wt[i]])', 'LCS: dp[i][j]=dp[i-1][j-1]+1 if chars match', 'Edit distance: min(insert,delete,replace)+1', 'Coin change: dp[i]=min(dp[i-c]+1) for coin c'] },
  { catId: 'code', title: 'Important Constants', tag: 'Code', formulas: ['π ≈ 3.14159265358979', 'e ≈ 2.71828182845905', 'φ ≈ 1.61803398874989', '√2 ≈ 1.41421356237310', 'INT_MAX 32-bit = 2³¹−1 = 2,147,483,647', 'LONG_MAX 64-bit = 2⁶³−1'] },
  { catId: 'bits', title: 'Bit Operators', tag: 'Bits', formulas: ['AND:  a & b', 'OR:   a | b', 'XOR:  a ^ b', 'NOT:  ~a', 'Left:  a << n  =  a × 2ⁿ', 'Right: a >> n  =  a ÷ 2ⁿ'] },
  { catId: 'bits', title: 'Bit Tricks', tag: 'Bits', formulas: ['Is even:          n & 1 == 0', 'Is power of 2:    n & (n−1) == 0', 'Clear lowest bit: n & (n−1)', 'Isolate lowest:   n & (−n)', 'Set bit k:        n | (1<<k)', 'Toggle bit k:     n ^ (1<<k)', 'Swap:             a^=b; b^=a; a^=b'] },
  { catId: 'bits', title: 'Number Bases', tag: 'Bits', formulas: ["Dec→Bin: divide by 2, track remainders", "Bin→Dec: Σ bit × 2ⁱ from right", "2's complement: ~x + 1", 'n-bit signed range: −2^(n-1) to 2^(n-1)−1', '1 hex digit = 4 bits'] },
  { catId: 'stats', title: 'Central Tendency', tag: 'Stats', formulas: ['Mean μ = Σx / n', 'Weighted mean = Σ(wᵢxᵢ)/Σwᵢ', 'Median: middle value (sorted)', 'Mode: most frequent value'] },
  { catId: 'stats', title: 'Spread & Variation', tag: 'Stats', formulas: ['Variance σ² = Σ(x−μ)² / n', 'Sample variance s² = Σ(x−x̄)²/(n−1)', 'Std Dev σ = √Variance', 'Z-score = (x−μ)/σ', 'IQR = Q3 − Q1'] },
  { catId: 'stats', title: 'Probability Rules', tag: 'Stats', formulas: ["P(A) = favourable/total", "P(A') = 1 − P(A)", 'P(A∪B) = P(A)+P(B)−P(A∩B)', 'P(A∩B) = P(A)×P(B)  if independent', 'Bayes: P(A|B) = P(B|A)P(A)/P(B)'] },
  { catId: 'stats', title: 'Distributions', tag: 'Stats', formulas: ['Binomial: P(X=k)=C(n,k)pᵏ(1−p)ⁿ⁻ᵏ', 'mean=np, var=np(1−p)', 'Poisson: P(X=k)=λᵏe⁻λ/k!', 'Normal: 68% within μ±1σ, 95% within μ±2σ'] },
  { catId: 'stats', title: 'Regression', tag: 'Stats', formulas: ['Slope b = Σ(x−x̄)(y−ȳ)/Σ(x−x̄)²', 'Intercept a = ȳ − b×x̄', 'Line: ŷ = a + bx', 'Pearson r = Cov(X,Y)/(σₓσᵧ)'] },
  { catId: 'calc', title: 'Derivative Rules', tag: 'Calc', formulas: ['d/dx[c] = 0', 'd/dx[xⁿ] = nxⁿ⁻¹', 'd/dx[eˣ] = eˣ', 'd/dx[ln x] = 1/x', "Chain: f'(g(x))·g'(x)", "Product: u'v + uv'", "Quotient: (u'v−uv')/v²"] },
  { catId: 'calc', title: 'Derivatives — Trig', tag: 'Calc', formulas: ['d/dx[sin x] = cos x', 'd/dx[cos x] = −sin x', 'd/dx[tan x] = sec²x', 'd/dx[arcsin x] = 1/√(1−x²)', 'd/dx[arctan x] = 1/(1+x²)'] },
  { catId: 'calc', title: 'Integrals — Basic', tag: 'Calc', formulas: ['∫ xⁿ dx = xⁿ⁺¹/(n+1) + C', '∫ 1/x dx = ln|x| + C', '∫ eˣ dx = eˣ + C', '∫ sin x dx = −cos x + C', '∫ cos x dx = sin x + C', '∫ sec²x dx = tan x + C'] },
  { catId: 'calc', title: 'Fundamental Theorem', tag: 'Calc', formulas: ['∫[a,b] f(x)dx = F(b)−F(a)', "F'(x) = f(x)", 'By parts: ∫u dv = uv − ∫v du'] },
  { catId: 'calc', title: 'Limits', tag: 'Calc', formulas: ['lim(x→0) sinx/x = 1', 'lim(x→∞) (1+1/x)ˣ = e', "L'Hôpital: lim f/g = lim f'/g'  (0/0 form)"] },
  { catId: 'calc', title: 'Taylor Series', tag: 'Calc', formulas: ['eˣ = 1 + x + x²/2! + x³/3! + …', 'sin x = x − x³/3! + x⁵/5! − …', 'cos x = 1 − x²/2! + x⁴/4! − …'] },
  { catId: 'cplx', title: 'Big-O Reference', tag: 'O(n)', table: true, thead: ['Name', 'Notation', 'Example'], rows: [['Constant', 'O(1)', 'Array index'], ['Logarithmic', 'O(log n)', 'Binary search'], ['Linear', 'O(n)', 'Linear scan'], ['Linearithmic', 'O(n log n)', 'Merge sort'], ['Quadratic', 'O(n²)', 'Bubble sort'], ['Cubic', 'O(n³)', 'Matrix multiply'], ['Exponential', 'O(2ⁿ)', 'Naive fibonacci'], ['Factorial', 'O(n!)', 'Brute-force TSP']] },
  { catId: 'cplx', title: 'Algorithm Complexity', tag: 'O(n)', table: true, thead: ['Algorithm', 'Time', 'Space'], rows: [['Binary Search', 'O(log n)', 'O(1)'], ['Bubble/Insertion', 'O(n²)', 'O(1)'], ['Merge Sort', 'O(n log n)', 'O(n)'], ['Quick Sort (avg)', 'O(n log n)', 'O(log n)'], ['Heap Sort', 'O(n log n)', 'O(1)'], ['Hash Table', 'O(1) avg', 'O(n)'], ['BFS / DFS', 'O(V+E)', 'O(V)'], ['Dijkstra', 'O(E log V)', 'O(V)']] },
  { catId: 'cplx', title: 'Master Theorem', tag: 'O(n)', formulas: ['T(n)=aT(n/b)+f(n)', 'Case 1: f=O(n^(logb_a−ε)) → T=Θ(n^logb_a)', 'Case 2: f=Θ(n^logb_a) → T=Θ(n^logb_a·log n)', 'Case 3: f=Ω(n^(logb_a+ε)) → T=Θ(f(n))', 'Common: 2T(n/2)+n → O(n log n)'] },
  { catId: 'coord', title: 'Distance & Midpoint', tag: 'Coord', formulas: ['Distance = √((x₂−x₁)²+(y₂−y₁)²)', 'Midpoint = ((x₁+x₂)/2, (y₁+y₂)/2)', '3D: d = √(Δx²+Δy²+Δz²)', 'Manhattan = |Δx|+|Δy|'] },
  { catId: 'coord', title: 'Line Equations', tag: 'Coord', formulas: ['Slope m = (y₂−y₁)/(x₂−x₁)', 'y = mx + c', 'y−y₁ = m(x−x₁)', 'ax+by+c = 0', 'Perpendicular: m₁×m₂ = −1'] },
  { catId: 'coord', title: 'Circle & Conics', tag: 'Coord', formulas: ['Circle: (x−h)²+(y−k)²=r²', 'Parabola: y²=4ax', 'Ellipse: x²/a²+y²/b²=1', 'Hyperbola: x²/a²−y²/b²=1', 'Point-to-line: d=|ax₀+by₀+c|/√(a²+b²)'] },
  { catId: 'matrix', title: 'Matrix Operations', tag: 'Matrix', formulas: ['(A+B)ᵢⱼ = Aᵢⱼ+Bᵢⱼ', 'Multiply: Cᵢⱼ = Σ Aᵢₖ Bₖⱼ', 'Transpose: (Aᵀ)ᵢⱼ = Aⱼᵢ', 'det(AB) = det(A)×det(B)'] },
  { catId: 'matrix', title: 'Determinant & Inverse', tag: 'Matrix', formulas: ['2×2 det: ad−bc', 'Singular if det = 0', 'A⁻¹ = adj(A)/det(A)', "Cramer: xᵢ=det(Aᵢ)/det(A)"] },
  { catId: 'matrix', title: 'Vectors', tag: 'Matrix', formulas: ['|v| = √(x²+y²+z²)', 'Unit: v̂ = v/|v|', 'Dot: a·b = |a||b|cosθ', 'Cross: |a×b| = |a||b|sinθ', 'Projection: (a·b/|b|²)b'] },
  { catId: 'matrix', title: 'Eigenvalues', tag: 'Matrix', formulas: ['Av = λv', 'det(A−λI) = 0', 'Trace = Σ eigenvalues', 'det(A) = Π eigenvalues'] },
  // 1. Number Systems
  { catId: 'alg', title: 'Number Systems', tag: 'Algebra', formulas: [
    'Natural Numbers: ℕ = {1, 2, 3, …}',
    'Whole Numbers: 𝕎 = {0, 1, 2, …}',
    'Integers: ℤ = {…, −2, −1, 0, 1, 2, …}',
    'Rational Numbers: ℚ = {p/q : p,q ∈ ℤ, q ≠ 0}',
    'Real Numbers: ℝ = Rational ∪ Irrational',
    'Complex Numbers: ℂ = {a + bi : a,b ∈ ℝ}',
    'Divisibility by 3/9: Sum of digits is divisible by 3/9',
    'Divisibility by 4/8: Last 2/3 digits divisible by 4/8',
    'Divisibility by 11: (Sum of odd-pos digits) − (Sum of even-pos digits) is divisible by 11'
  ] },
  // 2. Algebraic Identities
  { catId: 'alg', title: 'Algebraic Identities', tag: 'Algebra', formulas: [
    '(a + b + c)² = a² + b² + c² + 2ab + 2bc + 2ca',
    '(a + b)³ = a³ + b³ + 3ab(a + b) = a³ + 3a²b + 3ab² + b³',
    '(a − b)³ = a³ − b³ − 3ab(a − b) = a³ − 3a²b + 3ab² − b³',
    'a³ + b³ + c³ − 3abc = (a + b + c)(a² + b² + c² − ab − bc − ca)',
    'If a + b + c = 0, then a³ + b³ + c³ = 3abc'
  ] },
  // 3. Polynomials
  { catId: 'alg', title: 'Polynomials', tag: 'Algebra', formulas: [
    'General form: P(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + … + a₀',
    'Remainder Theorem: Remainder of P(x) ÷ (x − a) is P(a)',
    'Factor Theorem: (x − a) is a factor of P(x) ⟺ P(a) = 0',
    'Cubic Roots: ax³ + bx² + cx + d = 0 with roots α, β, γ',
    'α + β + γ = −b/a',
    'αβ + βγ + γα = c/a',
    'αβγ = −d/a'
  ] },
  // 4. Linear Equations
  { catId: 'alg', title: 'Linear Equations', tag: 'Algebra', formulas: [
    'Slope-Intercept: y = mx + b',
    'Point-Slope: y − y₁ = m(x − x₁)',
    'Standard Form: Ax + By = C',
    '2-Var System: a₁x + b₁y = c₁, a₂x + b₂y = c₂',
    'x = (c₁b₂ − c₂b₁) / (a₁b₂ − a₂b₁)',
    'y = (a₁c₂ − a₂c₁) / (a₁b₂ − a₂b₁)'
  ] },
  // 5. Inverse Trigonometry
  { catId: 'trig', title: 'Inverse Trigonometry', tag: 'Trig', formulas: [
    'sin⁻¹(x) domain: [−1, 1], range: [−π/2, π/2]',
    'cos⁻¹(x) domain: [−1, 1], range: [0, π]',
    'tan⁻¹(x) domain: ℝ, range: (−π/2, π/2)',
    'sin⁻¹(x) + cos⁻¹(x) = π/2',
    'tan⁻¹(x) + cot⁻¹(x) = π/2',
    'tan⁻¹(x) + tan⁻¹(y) = tan⁻¹((x + y) / (1 − xy))  [if xy < 1]'
  ] },
  // 6. Parabola
  { catId: 'coord', title: 'Parabola', tag: 'Coord', formulas: [
    'Standard: y² = 4ax (opens right)',
    'Standard: x² = 4ay (opens up)',
    'For y² = 4ax:',
    'Focus = (a, 0), Directrix: x = −a',
    'Axis: y = 0, Latus Rectum = 4a',
    'Focal distance of point P(x, y) = x + a'
  ] },
  // 7. Ellipse
  { catId: 'coord', title: 'Ellipse', tag: 'Coord', formulas: [
    'Standard: x²/a² + y²/b² = 1  (a > b)',
    'Eccentricity: e = √(1 − b²/a²)',
    'Foci: (±ae, 0), Directrices: x = ±a/e',
    'Vertices: (±a, 0), Co-vertices: (0, ±b)',
    'Major Axis = 2a, Minor Axis = 2b',
    'Latus Rectum = 2b²/a'
  ] },
  // 8. Hyperbola
  { catId: 'coord', title: 'Hyperbola', tag: 'Coord', formulas: [
    'Standard: x²/a² − y²/b² = 1',
    'Eccentricity: e = √(1 + b²/a²)',
    'Foci: (±ae, 0), Directrices: x = ±a/e',
    'Vertices: (±a, 0), Transverse Axis = 2a',
    'Asymptotes: y = ±(b/a)x',
    'Latus Rectum = 2b²/a'
  ] },
  // 9. Sets
  { catId: 'discrete', title: 'Sets & Operations', tag: 'Discrete', formulas: [
    'Union: A ∪ B = {x : x ∈ A or x ∈ B}',
    'Intersection: A ∩ B = {x : x ∈ A and x ∈ B}',
    'Difference: A − B = {x : x ∈ A and x ∉ B}',
    'Complement: A′ = {x ∈ U : x ∉ A}',
    'De Morgan: (A ∪ B)′ = A′ ∩ B′',
    'De Morgan: (A ∩ B)′ = A′ ∪ B′',
    'n(A ∪ B) = n(A) + n(B) − n(A ∩ B)',
    'n(A ∪ B ∪ C) = n(A)+n(B)+n(C) − n(A∩B)−n(B∩C)−n(C∩A) + n(A∩B∩C)',
    'Subsets count: 2ⁿ for set of size n'
  ] },
  // 10. Relations and Functions
  { catId: 'discrete', title: 'Relations & Functions', tag: 'Discrete', formulas: [
    'Cartesian Product: A × B = {(a, b) : a ∈ A, b ∈ B}',
    'Reflexive Relation: aRa for all a ∈ A',
    'Symmetric Relation: aRb ⟹ bRa',
    'Transitive Relation: aRb and bRc ⟹ aRc',
    'Equivalence: Reflexive + Symmetric + Transitive',
    'Injective (1-1): f(x) = f(y) ⟹ x = y',
    'Surjective (Onto): Range of f = Codomain of f',
    'Bijective: Both Injective and Surjective',
    'Composition: (f ∘ g)(x) = f(g(x))'
  ] },
  // 11. Applications of Derivatives
  { catId: 'calc', title: 'Applications of Derivatives', tag: 'Calc', formulas: [
    'Tangent Slope at P(x₁, y₁): m = f′(x₁)',
    'Tangent Line: y − y₁ = f′(x₁)(x − x₁)',
    'Normal Line: y − y₁ = −(1 / f′(x₁))(x − x₁)',
    'Increasing: f′(x) ≥ 0',
    'Decreasing: f′(x) ≤ 0',
    'Local Maxima: f′(c) = 0 and f″(c) < 0',
    'Local Minima: f′(c) = 0 and f″(c) > 0'
  ] },
  // 12. Applications of Integrals
  { catId: 'calc', title: 'Applications of Integrals', tag: 'Calc', formulas: [
    'Area under y = f(x) from a to b: A = ∫[a,b] f(x) dx',
    'Area between f(x) and g(x): A = ∫[a,b] (f(x) − g(x)) dx  [f(x) ≥ g(x)]',
    'Volume of Revolution (x-axis): V = π ∫[a,b] [f(x)]² dx',
    'Volume of Revolution (y-axis): V = 2π ∫[a,b] x·f(x) dx'
  ] },
  // 13. Differential Equations
  { catId: 'calc', title: 'Differential Equations', tag: 'Calc', formulas: [
    'Variable Separable: dy/dx = g(x)h(y) ⟹ ∫(1/h(y)) dy = ∫g(x) dx',
    'Homogeneous: dy/dx = f(y/x) ⟹ substitute y = vx',
    'Linear 1st Order: dy/dx + P(x)y = Q(x)',
    'Integrating Factor: I.F. = e^(∫P(x) dx)',
    'General Solution: y · I.F. = ∫(Q(x) · I.F.) dx + C'
  ] },
  // 14. Three Dimensional Geometry
  { catId: 'coord', title: '3D Coordinate Geometry', tag: 'Coord', formulas: [
    'Direction Cosines: l = cos α, m = cos β, n = cos γ',
    'DC Identity: l² + m² + n² = 1',
    'Distance: d = √((x₂ − x₁)² + (y₂ − y₁)² + (z₂ − z₁)²)',
    'Line Vector eq: r = a + λb',
    'Line Cartesian eq: (x − x₁)/a = (y − y₁)/b = (z − z₁)/c',
    'Plane Vector eq: r · n = d',
    'Plane Cartesian eq: ax + by + cz = d',
    'Plane Point-Normal: a(x − x₁) + b(y − y₁) + c(z − z₁) = 0'
  ] },
  // 15. Linear Programming
  { catId: 'alg', title: 'Linear Programming', tag: 'Algebra', formulas: [
    'Objective Function: Z = ax + by (maximize/minimize)',
    'Decision Variables: x ≥ 0, y ≥ 0',
    'Linear Constraints: aᵢx + bᵢy ≤ cᵢ (or ≥, =)',
    'Corner Point Theorem: Optimal values always occur at the vertices (corner points) of the feasible region.'
  ] },
  // 16. Laplace Transforms
  { catId: 'engg', title: 'Laplace Transforms', tag: 'Engg', formulas: [
    'L{1} = 1/s',
    'L{e^(at)} = 1 / (s − a)',
    'L{tⁿ} = n! / sⁿ⁺¹',
    'L{sin wt} = w / (s² + w²)',
    'L{cos wt} = s / (s² + w²)',
    'L{e^(at)·f(t)} = F(s − a)  [First Shifting]',
    'L{f′(t)} = s·F(s) − f(0)'
  ] },
  // 17. Fourier Series
  { catId: 'engg', title: 'Fourier Series', tag: 'Engg', formulas: [
    'Expansion: f(x) = a₀/2 + Σ [aₙ cos(nx) + bₙ sin(nx)]',
    'a₀ = (1/π) ∫[−π,π] f(x) dx',
    'aₙ = (1/π) ∫[−π,π] f(x) cos(nx) dx',
    'bₙ = (1/π) ∫[−π,π] f(x) sin(nx) dx'
  ] },
  // 18. Z-Transform
  { catId: 'engg', title: 'Z-Transform', tag: 'Engg', formulas: [
    'Definition: X(z) = Σ x[n] z⁻ⁿ  (n from −∞ to ∞)',
    'Z{δ[n]} = 1  (unit impulse)',
    'Z{u[n]} = z / (z − 1)  [ROC: |z| > 1] (unit step)',
    'Z{aⁿ u[n]} = z / (z − a)  [ROC: |z| > |a|]',
    'Z{n u[n]} = z / (z − 1)²'
  ] },
  // 19. Factorial & Stirling's
  { catId: 'seq', title: 'Factorials', tag: 'Seq', formulas: [
    'Definition: n! = n × (n − 1) × … × 1',
    'Recurrence: n! = n × (n − 1)!',
    'Zero Factorial: 0! = 1',
    'Stirling\'s: n! ≈ √(2πn) · (n/e)ⁿ'
  ], code: `function factorial(n) {\n  if (n < 0) return undefined;\n  return n <= 1 ? 1 : n * factorial(n - 1);\n}` },
  // 20. Exponential Growth & Decay
  { catId: 'alg', title: 'Exponential Growth', tag: 'Algebra', formulas: [
    'Discrete Growth: N(t) = N₀(1 + r)ᵗ',
    'Continuous Growth: N(t) = N₀ e^(kt)',
    'Decay Model: N(t) = N₀ e^(−kt)',
    'Half-Life: T_half = ln(2) / k ≈ 0.693 / k',
    'Doubling Time: T_double = ln(2) / k'
  ] },
  // 21. Recurrence Relations
  { catId: 'cplx', title: 'Recurrence Relations', tag: 'Complexity', formulas: [
    'Linear Homogeneous: aₙ = c₁aₙ₋₁ + c₂aₙ₋₂',
    'Characteristic Equation: r² − c₁r − c₂ = 0',
    'Distinct Roots r₁, r₂: aₙ = A(r₁)ⁿ + B(r₂)ⁿ',
    'Repeated Root r: aₙ = (A + Bn)(r)ⁿ',
    'Fibonacci: Fₙ = Fₙ₋₁ + Fₙ₋₂ ⟹ r² − r − 1 = 0'
  ] },
  // 22. Graph Theory Basics
  { catId: 'discrete', title: 'Graph Theory Basics', tag: 'Discrete', formulas: [
    'Handshaking Lemma: Σ deg(v) = 2|E|',
    'Euler\'s Formula (Planar): V − E + F = 2',
    'Trees Property: |E| = |V| − 1 (connected, acyclic)',
    'Sum of interior angles of region: Σ deg(f) = 2|E|',
    'Complete Graph Kₙ Edges: n(n − 1) / 2',
    'Bipartite max edges: V² / 4'
  ] },
  // 23. Boolean Algebra
  { catId: 'discrete', title: 'Boolean Algebra', tag: 'Discrete', formulas: [
    'Identity: A + 0 = A,  A · 1 = A',
    'Dominance: A + 1 = 1,  A · 0 = 0',
    'Idempotent: A + A = A,  A · A = A',
    'Complement: A + A′ = 1,  A · A′ = 0',
    'Double Negation: (A′)′ = A',
    'Commutative: A + B = B + A,  A · B = B · A',
    'Distributive: A + (B · C) = (A + B) · (A + C)',
    'Distributive: A · (B + C) = (A · B) + (A · C)',
    'De Morgan: (A + B)′ = A′ · B′',
    'De Morgan: (A · B)′ = A′ + B′',
    'Absorption: A + (A · B) = A,  A · (A + B) = A',
    'Consensus: AB + A′C + BC = AB + A′C'
  ] },
];

/* ── STATE ── */
let VIEW = 'dashboard';
let ACTIVE_CAT = null;
let ACTIVE_SECTION_TITLE = null;
let EXPANDED_CATS = {};

/* ── HELPERS ── */
function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function formatFormula(f) {
  const parts = f.split(/(=|≈|≡|→|∝|≤|≥)/);
  if (parts.length >= 3) {
    const lhs = parts[0];
    const op = parts[1];
    const rhs = parts.slice(2).join('');
    return `<span class="f-lhs">${esc(lhs)}</span><span class="f-op">${esc(op)}</span><span class="f-rhs">${esc(rhs)}</span>`;
  }
  return esc(f);
}
function toggleSidebar() { document.body.classList.toggle('sidebar-open'); }
function showToast(msg, col) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.style.borderColor = col || 'var(--border2)';
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2600);
}

/* ── NAVIGATION ── */
function goToDashboard() {
  VIEW = 'dashboard'; ACTIVE_CAT = null; ACTIVE_SECTION_TITLE = null;
  document.getElementById('search').value = '';
  buildSidebar(); renderDashboard();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (document.body.classList.contains('sidebar-open')) toggleSidebar();
}
function goToTopic(catId) {
  ACTIVE_CAT = catId; ACTIVE_SECTION_TITLE = null; EXPANDED_CATS[catId] = true; VIEW = 'topic';
  document.getElementById('search').value = '';
  buildSidebar(); renderTopicView(catId);
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (window.innerWidth < 900 && document.body.classList.contains('sidebar-open')) toggleSidebar();
}
function goToSectionByIndex(catId, idx) {
  const secs = SECTIONS.filter(s => s.catId === catId);
  if (idx < 0 || idx >= secs.length) return;
  goToSection(catId, secs[idx].title);
}
function goToSection(catId, sectionTitle) {
  ACTIVE_CAT = catId; ACTIVE_SECTION_TITLE = sectionTitle; EXPANDED_CATS[catId] = true; VIEW = 'section';
  document.getElementById('search').value = '';
  buildSidebar(); renderSectionView(catId, sectionTitle);
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (window.innerWidth < 900 && document.body.classList.contains('sidebar-open')) toggleSidebar();
}
function toggleSidebarExpand(catId, e) {
  e.stopPropagation(); EXPANDED_CATS[catId] = !EXPANDED_CATS[catId]; buildSidebar();
}
function handleSearch(query) {
  const q = query.trim().toLowerCase();
  if (!q) {
    if (VIEW === 'section' && ACTIVE_CAT && ACTIVE_SECTION_TITLE) renderSectionView(ACTIVE_CAT, ACTIVE_SECTION_TITLE);
    else if (ACTIVE_CAT && VIEW !== 'dashboard') renderTopicView(ACTIVE_CAT);
    else renderDashboard();
    return;
  }
  VIEW = 'search'; buildSidebar(); renderSearch(q);
}

/* ── SIDEBAR ── */
function buildSidebar() {
  const list = document.getElementById('sb-list'); list.innerHTML = '';
  const hb = document.getElementById('sb-home-btn');
  if (hb) hb.classList.toggle('active', VIEW === 'dashboard');
  CATS.forEach(cat => {
    const secs = SECTIONS.filter(s => s.catId === cat.id);
    const isActive = ACTIVE_CAT === cat.id;
    const isExpanded = !!EXPANDED_CATS[cat.id];
    const topicEl = document.createElement('div');
    topicEl.className = 'sb-topic-row';
    if (isActive) topicEl.style.cssText = `border-left-color:${cat.color};color:${cat.color};background:${cat.color}18`;
    const arrowEl = document.createElement('span');
    arrowEl.className = 'sb-arrow' + (isExpanded ? ' open' : ''); arrowEl.innerHTML = '&#8250;';
    arrowEl.onclick = (e) => toggleSidebarExpand(cat.id, e);
    topicEl.innerHTML = `<span class="sb-dot" style="background:${cat.color}"></span><span class="sb-topic-label">${esc(cat.label)}</span><span class="sb-count">${secs.length}</span>`;
    topicEl.appendChild(arrowEl);
    topicEl.onclick = () => goToTopic(cat.id);
    list.appendChild(topicEl);
    if (isExpanded) {
      secs.forEach(sec => {
        const isActiveSub = isActive && ACTIVE_SECTION_TITLE === sec.title;
        const subEl = document.createElement('div');
        subEl.className = 'sb-subitem';
        if (isActiveSub) subEl.style.cssText = `color:${cat.color};border-left-color:${cat.color};background:${cat.color}12`;
        subEl.textContent = sec.title;
        subEl.onclick = (e) => { e.stopPropagation(); goToSection(cat.id, sec.title); };
        list.appendChild(subEl);
      });
    }
  });
}

/* ── RENDER: DASHBOARD ── */
function renderDashboard() {
  const totalF = SECTIONS.reduce((a, s) => a + (s.formulas ? s.formulas.length : 0) + (s.rows ? s.rows.length : 0), 0);
  const totalSubs = SECTIONS.length;
  const catMaxMap = {};
  CATS.forEach(c => { catMaxMap[c.id] = SECTIONS.filter(s => s.catId === c.id).reduce((a, s) => a + (s.formulas ? s.formulas.length : 0) + (s.rows ? s.rows.length : 0), 0); });
  const absMax = Math.max(...Object.values(catMaxMap), 1);
  const rows = CATS.map(cat => {
    const fcount = catMaxMap[cat.id];
    const scount = SECTIONS.filter(s => s.catId === cat.id).length;
    const barW = Math.round(fcount / absMax * 100);
    return `<div class="cat-count-row" onclick="goToTopic('${cat.id}')">
      <div class="cat-count-icon" style="color:${cat.color}">${CAT_ICONS[cat.id] || '∑'}</div>
      <div class="cat-count-name" style="color:${cat.color}">${esc(cat.label)}</div>
      <div class="cat-count-subtitle">${esc(CAT_SUBTITLES[cat.id] || '')}</div>
      <div class="cat-count-bar-wrap"><div class="cat-count-bar" style="width:${barW}%;background:${cat.color}"></div></div>
      <div class="cat-count-numbox">
        <div class="cat-count-fnum" style="color:${cat.color}">${fcount}</div>
        <div class="cat-count-flabel">formulas · ${scount} topics</div>
      </div>
    </div>`;
  }).join('');
  document.getElementById('content').innerHTML = `
    <div id="hero">
      <div class="hero-eyebrow">Complete Reference</div>
      <h1 class="hero-title"><span>FormulaSphere Dashboard</span></h1>
      <p class="hero-sub">All formulas organised by topic. Open the sidebar ☰ to browse, or click any category below to jump in.</p>
      <div class="hero-hint">&#9432;&nbsp; Use the sidebar or search bar to navigate instantly</div>
    </div>
    <div class="stat-hero-grid">
      <div class="stat-hero-card"><div class="stat-hero-num">${totalF}</div><div class="stat-hero-label">Total Formulas</div></div>
      <div class="stat-hero-card"><div class="stat-hero-num">${CATS.length}</div><div class="stat-hero-label">Categories</div></div>
      <div class="stat-hero-card"><div class="stat-hero-num">${totalSubs}</div><div class="stat-hero-label">Subtopics</div></div>
    </div>
    <div class="sec">
      <div class="sec-header">
        <span class="sec-title" style="color:var(--blue)">Formula Count by Category</span>
        <div class="sec-line"></div>
        <span class="sec-badge">click to open</span>
      </div>
      <div class="cat-count-list">${rows}</div>
    </div>`;
}

/* ── RENDER: TOPIC VIEW ── */
function renderTopicView(catId) {
  const cat = CATS.find(c => c.id === catId); if (!cat) { goToDashboard(); return; }
  const secs = SECTIONS.filter(s => s.catId === catId);
  const idx = CATS.findIndex(c => c.id === catId);
  const prev = idx > 0 ? CATS[idx - 1] : null; const next = idx < CATS.length - 1 ? CATS[idx + 1] : null;
  const prevBtn = prev ? `<button class="cat-nav-btn" onclick="goToTopic('${prev.id}')">&larr; ${esc(prev.label)}</button>` : '';
  const nextBtn = next ? `<button class="cat-nav-btn" onclick="goToTopic('${next.id}')">${esc(next.label)} &rarr;</button>` : '';
  document.getElementById('content').innerHTML = `
    <div class="topic-nav">
      <button class="back-btn" onclick="goToDashboard()">&larr; Dashboard</button>
      <span class="topic-label" style="color:${cat.color}">${esc(cat.label)}</span>
      <span class="topic-badge">${secs.length} subtopics</span>
      <div class="topic-cat-nav">${prevBtn}${nextBtn}</div>
    </div>
    <div class="grid g2">${secs.map(s => renderSection(s)).join('')}</div>`;
}

/* ── RENDER: SINGLE SECTION VIEW ── */
function renderSectionView(catId, sectionTitle) {
  const cat = CATS.find(c => c.id === catId); if (!cat) { goToDashboard(); return; }
  const allSecs = SECTIONS.filter(s => s.catId === catId);
  const sec = allSecs.find(s => s.title === sectionTitle); if (!sec) { goToTopic(catId); return; }
  const secIdx = allSecs.findIndex(s => s.title === sectionTitle);
  const prevBtn = secIdx > 0 ? `<button class="cat-nav-btn" onclick="goToSectionByIndex('${catId}',${secIdx - 1})">&larr; Prev</button>` : '';
  const nextBtn = secIdx < allSecs.length - 1 ? `<button class="cat-nav-btn" onclick="goToSectionByIndex('${catId}',${secIdx + 1})">Next &rarr;</button>` : '';
  document.getElementById('content').innerHTML = `
    <div class="topic-nav">
      <button class="back-btn" onclick="goToTopic('${catId}')">&larr; ${esc(cat.label)}</button>
      <span class="topic-label" style="color:${cat.color}">${esc(sectionTitle)}</span>
      <span class="topic-badge">${esc(cat.label)}</span>
      <div class="topic-cat-nav">${prevBtn}${nextBtn}</div>
    </div>
    <div class="grid" style="max-width:640px">${renderSection(sec)}</div>`;
}

/* ── RENDER: SEARCH ── */
function renderSearch(query) {
  const filtered = SECTIONS.filter(s => {
    const h = (s.title + ' ' + (s.formulas || []).join(' ') + (s.note || '') + (s.code || '') + s.catId).toLowerCase();
    return h.includes(query);
  });
  if (!filtered.length) {
    document.getElementById('content').innerHTML = `
      <div style="text-align:center;padding:64px 24px;color:var(--text3)">
        <div style="font-size:48px;margin-bottom:12px">&#x2205;</div>
        <p style="font-size:15px">No results for &ldquo;${esc(query)}&rdquo;</p>
        <p style="margin-top:12px"><span class="back-btn" onclick="goToDashboard()" style="display:inline-flex">&larr; Back to Dashboard</span></p>
      </div>`;
    return;
  }
  const grouped = {}; filtered.forEach(s => { if (!grouped[s.catId]) grouped[s.catId] = []; grouped[s.catId].push(s); });
  let html = `<div class="search-header">
    <span class="search-query-label">Results for &ldquo;${esc(query)}&rdquo;</span>
    <span class="search-count">${filtered.length} match${filtered.length !== 1 ? 'es' : ''}</span>
  </div>`;
  CATS.forEach(cat => {
    if (!grouped[cat.id]) return;
    const secs = grouped[cat.id];
    html += `<div class="sec">
      <div class="sec-header">
        <span class="sec-title" style="color:${cat.color};cursor:pointer" onclick="goToTopic('${cat.id}')">${esc(cat.label)}</span>
        <div class="sec-line"></div>
        <span class="sec-badge">${secs.length} match${secs.length !== 1 ? 'es' : ''}</span>
      </div>
      <div class="grid g2">${secs.map(s => renderSection(s)).join('')}</div>
    </div>`;
  });
  document.getElementById('content').innerHTML = html;
}

/* ── RENDER: FORMULA CARD ── */
function renderSection(sec) {
  const cat = CATS.find(c => c.id === sec.catId);
  const dot = cat ? cat.color : '#3b82f6';
  let h = `<div class="fc" style="--cat-color: ${dot}">`;
  h += `<div class="fc-head"><span class="fc-dot" style="background:${dot}"></span><span class="fc-title">${esc(sec.title)}</span>${sec.tag ? `<span class="fc-tag">${esc(sec.tag)}</span>` : ''}</div>`;
  if (sec.svg) h += `<svg class="fsvg" viewBox="0 0 44 44">${sec.svg}</svg>`;
  if (sec.big) h += `<div class="fbig">${formatFormula(sec.big)}</div>`;
  if (sec.formulas) sec.formulas.forEach(f => { h += `<div class="fr">${formatFormula(f)}</div>`; });
  if (sec.table) {
    h += `<table class="ftable"><thead><tr>${sec.thead.map(x => `<th>${esc(x)}</th>`).join('')}</tr></thead><tbody>`;
    sec.rows.forEach(row => { h += `<tr>${row.map(c => `<td>${esc(c)}</td>`).join('')}</tr>`; });
    h += '</tbody></table>';
  }
  if (sec.code) {
    const hi = esc(sec.code)
      .replace(/\b(function|const|let|var|if|else|for|while|return|new|of|in)\b/g, '<span class="kw">$1</span>')
      .replace(/\/\/.*/g, m => `<span class="cm">${m}</span>`)
      .replace(/\b(\d+)\b/g, '<span class="nm">$1</span>');
    h += `<div class="fcode">${hi}</div>`;
  }
  if (sec.note) h += `<p class="fnote">${esc(sec.note)}</p>`;
  h += `</div>`;
  return h;
}

/* ================================================================
   PWA / INSTALL SYSTEM
   ================================================================ */
let deferredPrompt = null;

function createAppIcon(size) {
  try {
    const cv = document.createElement('canvas'); cv.width = size; cv.height = size;
    const ctx = cv.getContext('2d');
    const g = ctx.createLinearGradient(0, 0, size, size);
    g.addColorStop(0, '#0d1525'); g.addColorStop(1, '#1a2e50');
    ctx.fillStyle = g;
    ctx.beginPath();
    const r = size * 0.18;
    ctx.moveTo(r, 0); ctx.lineTo(size - r, 0); ctx.quadraticCurveTo(size, 0, size, r);
    ctx.lineTo(size, size - r); ctx.quadraticCurveTo(size, size, size - r, size);
    ctx.lineTo(r, size); ctx.quadraticCurveTo(0, size, 0, size - r);
    ctx.lineTo(0, r); ctx.quadraticCurveTo(0, 0, r, 0); ctx.closePath(); ctx.fill();
    ctx.fillStyle = '#3b82f6';
    ctx.font = `bold ${size * 0.38}px Georgia,serif`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('◉', size / 2, size / 2 + size * 0.04);
    ctx.fillStyle = 'rgba(59,130,246,0.25)';
    ctx.font = `bold ${size * 0.18}px Space Grotesk,sans-serif`;
    ctx.fillText('∑', size * 0.66, size * 0.7);
    return cv.toDataURL('image/png');
  } catch (e) { return ''; }
}

function setupPWA() {
  try {
    const icon192 = createAppIcon(192);
    const icon512 = createAppIcon(512);
    const manifest = {
      name: 'FormulaSphere – Math Formula Reference',
      short_name: 'FormulaSphere',
      description: '200+ math formulas across 14 categories. Works offline.',
      start_url: './', display: 'standalone', orientation: 'any',
      background_color: '#080c14', theme_color: '#3b82f6',
      icons: [
        { src: icon192, sizes: '192x192', type: 'image/png', purpose: 'any maskable' },
        { src: icon512, sizes: '512x512', type: 'image/png', purpose: 'any maskable' }
      ]
    };
    const blob = new Blob([JSON.stringify(manifest)], { type: 'application/manifest+json' });
    const link = document.createElement('link');
    link.rel = 'manifest'; link.href = URL.createObjectURL(blob);
    document.head.appendChild(link);
  } catch (e) { }

  document.getElementById('install-btn').classList.add('show');

  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    deferredPrompt = e;
    const btn = document.getElementById('install-btn');
    btn.classList.add('ready');
    document.getElementById('install-label').textContent = 'Install App';
    btn.title = 'Install FormulaSphere directly — one click!';
    // Update modal
    const nb = document.getElementById('android-native-box');
    if (nb) nb.style.display = 'block';
    // Update mobile sheet: show one-tap notice + upgrade button
    const notice = document.getElementById('ms-native-notice');
    if (notice) notice.style.display = 'flex';
    const mpBtn = document.getElementById('ms-primary-btn');
    if (mpBtn) {
      mpBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1v9M5 7l3 3 3-3M2 12v1a1 1 0 001 1h10a1 1 0 001-1v-1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg> Install Now — One Tap`;
    }
  });

  window.addEventListener('appinstalled', () => {
    deferredPrompt = null;
    document.getElementById('install-btn').classList.remove('show');
    hideMobileSheet();
    hideFAB();
    showToast('✓ FormulaSphere installed!', 'var(--green)');
  });
}


function doNativeInstall() {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  deferredPrompt.userChoice.then(r => {
    if (r.outcome === 'accepted') {
      showToast('Installing FormulaSphere…', 'var(--blue)');
      document.getElementById('install-btn').classList.remove('show');
    }
    deferredPrompt = null;
    closeInstallModal();
  });
}

function downloadAPKProject() {
  const b64 = APK_PROJECT_B64;
  try {
    const bytes = Uint8Array.from(atob(b64), c => c.charCodeAt(0));
    const blob = new Blob([bytes], { type: 'application/zip' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'FormulaSphere-Android.zip';
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    URL.revokeObjectURL(url);
    const btn = document.getElementById('dl-apk-btn');
    if (btn) {
      const orig = btn.innerHTML;
      btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8l4 4 8-8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> Downloading…';
      btn.style.background = 'linear-gradient(135deg,#1d4ed8,#1e40af)';
      setTimeout(() => { btn.innerHTML = orig; btn.style.background = ''; }, 2500);
    }
    showToast('↓ Android project downloaded', 'var(--blue)');
  } catch (e) {
    alert('Download failed — try right-clicking and Save as.');
  }
}

function downloadHTMLApp() {
  try {
    const doctype = '<!DOCTYPE html>\n';
    const html = document.documentElement.outerHTML;
    const blob = new Blob([doctype + html], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'FormulaSphere.html';
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    URL.revokeObjectURL(url);
    const btn = document.querySelector('.dl-btn.green-btn');
    if (btn) {
      const orig = btn.innerHTML;
      btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8l4 4 8-8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> Downloading…';
      btn.style.background = 'linear-gradient(135deg,#059669,#047857)';
      setTimeout(() => { btn.innerHTML = orig; btn.style.background = ''; }, 2500);
    }
    showToast('↓ FormulaSphere.html saved', 'var(--green)');
  } catch (err) {
    alert('Download failed. Try right-clicking and choosing "Save as…".');
  }
}

/* ── APPLE TOUCH ICON ── */
(function () {
  try {
    const icon = createAppIcon(180);
    const link = document.createElement('link');
    link.rel = 'apple-touch-icon'; link.href = icon;
    document.head.appendChild(link);
  } catch (e) { }
})();

/* ================================================================
   MOBILE INSTALL SHEET
   ================================================================ */
(function initMobileSheet() {
  const UA = navigator.userAgent || '';
  const isIOS = /iPad|iPhone|iPod/.test(UA) && !window.MSStream;
  const isAndroid = /Android/.test(UA);
  const isMobile = isIOS || isAndroid;
  window._MS_isIOS = isIOS;


  // Don't show if already in standalone (installed) mode
  const isStandalone =
    window.navigator.standalone === true ||
    window.matchMedia('(display-mode:standalone)').matches;

  if (!isMobile || isStandalone) return;

  /* ── Setup sheet content based on platform ── */
  const sheet = document.getElementById('mobile-sheet');
  const pill = document.getElementById('ms-platform-pill');
  const primaryBtn = document.getElementById('ms-primary-btn');

  if (!sheet) return;
  sheet.style.display = 'block'; // pre-mount off-screen

  if (isAndroid) {
    pill.textContent = 'Android';
    pill.className = 'ms-platform-pill android';
    pill.style.display = 'inline-flex';
    document.getElementById('ms-android-steps').style.display = 'flex';
    primaryBtn.className = 'android';
    primaryBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1v9M5 7l3 3 3-3M2 12v1a1 1 0 001 1h10a1 1 0 001-1v-1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg> Add to Home Screen`;
  }

  if (isIOS) {
    pill.textContent = 'iPhone / iPad';
    pill.className = 'ms-platform-pill ios';
    pill.style.display = 'inline-flex';
    document.getElementById('ms-ios-steps').style.display = 'flex';
    primaryBtn.className = 'ios';
    primaryBtn.innerHTML = `<svg width="14" height="15" viewBox="0 0 14 15" fill="none"><path d="M7 1v9M4 7l3 3 3-3M1 12h12" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg> Open Share Menu`;
  }

  // Show FAB immediately (install is available but not yet triggered)
  const fab=document.getElementById('ms-fab');
  if(fab)fab.classList.add('fab-visible');

  /* ── Touch swipe-down to dismiss ── */
  let touchStartY = 0;
  sheet.addEventListener('touchstart', e => { touchStartY = e.touches[0].clientY; }, { passive: true });
  sheet.addEventListener('touchmove', e => {
    const delta = e.touches[0].clientY - touchStartY;
    if (delta > 0) sheet.style.transform = `translateY(${Math.min(delta, 160)}px)`;
  }, { passive: true });
  sheet.addEventListener('touchend', e => {
    const delta = e.changedTouches[0].clientY - touchStartY;
    if (delta > 80) {
      sheet.style.transform = '';
      hideMobileSheet(false);
    } else {
      sheet.style.transform = '';
    }
  }, { passive: true });
})();

function showMobileSheet() {
  const sheet = document.getElementById('mobile-sheet');
  const bd = document.getElementById('ms-backdrop');
  if (!sheet) return;
  sheet.style.display = 'block';
  bd.style.display = 'block';
  // Force reflow then animate
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      sheet.classList.add('ms-open');
      bd.classList.add('ms-open');
    });
  });
  // Pulse the FAB only once
  const fab=document.getElementById('ms-fab');
  if(fab)fab.classList.remove('fab-visible');
}

function hideMobileSheet(permanent){
  const sheet=document.getElementById('mobile-sheet');
  const bd=document.getElementById('ms-backdrop');
  if(sheet)sheet.classList.remove('ms-open');
  if(bd)bd.classList.remove('ms-open');
  // After the CSS transition, hide the elements
  setTimeout(()=>{
    if(sheet)sheet.style.display='none';
    if(bd)bd.style.display='none';
  },420);
  if(!permanent){
    // Re-show the FAB so the user can open it again later
    const fab=document.getElementById('ms-fab');
    if(fab)fab.classList.add('fab-visible');
  }
}

function hideFAB(){
  const fab=document.getElementById('ms-fab');
  if(fab)fab.classList.remove('fab-visible');
}

function closeInstallModal(){
  hideMobileSheet(true);
}


function mobileSheetAction() {
  if (deferredPrompt) {
    // Android Chrome native install
    hideMobileSheet();
    doNativeInstall();
  } else if (window._MS_isIOS) {
    // iOS: can't trigger programmatically — guide user, then confirm
    const btn = document.getElementById('ms-primary-btn');
    if (btn) {
      btn.textContent = '✓ Follow the steps above ↑';
      btn.className = 'done';
      btn.onclick = () => hideMobileSheet(true);
    }
  } else {
    // Android without native prompt (Samsung Internet, Firefox, etc.)
    const btn = document.getElementById('ms-primary-btn');
    if (btn) {
      btn.textContent = '✓ Follow the steps above ↑';
      btn.className = 'done';
      btn.onclick = () => hideMobileSheet(true);
    }
  }
}


const APK_PROJECT_B64 = "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";

/* ── INIT ── */
document.getElementById('total-count').textContent =
  SECTIONS.reduce((a, s) => a + (s.formulas ? s.formulas.length : 0) + (s.rows ? s.rows.length : 0), 0);
setupPWA();
buildSidebar();
renderDashboard();