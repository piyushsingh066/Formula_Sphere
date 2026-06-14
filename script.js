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
  {
    catId: 'alg', title: 'Number Systems', tag: 'Algebra', formulas: [
      'Natural Numbers: ℕ = {1, 2, 3, …}',
      'Whole Numbers: 𝕎 = {0, 1, 2, …}',
      'Integers: ℤ = {…, −2, −1, 0, 1, 2, …}',
      'Rational Numbers: ℚ = {p/q : p,q ∈ ℤ, q ≠ 0}',
      'Real Numbers: ℝ = Rational ∪ Irrational',
      'Complex Numbers: ℂ = {a + bi : a,b ∈ ℝ}',
      'Divisibility by 3/9: Sum of digits is divisible by 3/9',
      'Divisibility by 4/8: Last 2/3 digits divisible by 4/8',
      'Divisibility by 11: (Sum of odd-pos digits) − (Sum of even-pos digits) is divisible by 11'
    ]
  },
  // 2. Algebraic Identities
  {
    catId: 'alg', title: 'Algebraic Identities', tag: 'Algebra', formulas: [
      '(a + b + c)² = a² + b² + c² + 2ab + 2bc + 2ca',
      '(a + b)³ = a³ + b³ + 3ab(a + b) = a³ + 3a²b + 3ab² + b³',
      '(a − b)³ = a³ − b³ − 3ab(a − b) = a³ − 3a²b + 3ab² − b³',
      'a³ + b³ + c³ − 3abc = (a + b + c)(a² + b² + c² − ab − bc − ca)',
      'If a + b + c = 0, then a³ + b³ + c³ = 3abc'
    ]
  },
  // 3. Polynomials
  {
    catId: 'alg', title: 'Polynomials', tag: 'Algebra', formulas: [
      'General form: P(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + … + a₀',
      'Remainder Theorem: Remainder of P(x) ÷ (x − a) is P(a)',
      'Factor Theorem: (x − a) is a factor of P(x) ⟺ P(a) = 0',
      'Cubic Roots: ax³ + bx² + cx + d = 0 with roots α, β, γ',
      'α + β + γ = −b/a',
      'αβ + βγ + γα = c/a',
      'αβγ = −d/a'
    ]
  },
  // 4. Linear Equations
  {
    catId: 'alg', title: 'Linear Equations', tag: 'Algebra', formulas: [
      'Slope-Intercept: y = mx + b',
      'Point-Slope: y − y₁ = m(x − x₁)',
      'Standard Form: Ax + By = C',
      '2-Var System: a₁x + b₁y = c₁, a₂x + b₂y = c₂',
      'x = (c₁b₂ − c₂b₁) / (a₁b₂ − a₂b₁)',
      'y = (a₁c₂ − a₂c₁) / (a₁b₂ − a₂b₁)'
    ]
  },
  // 5. Inverse Trigonometry
  {
    catId: 'trig', title: 'Inverse Trigonometry', tag: 'Trig', formulas: [
      'sin⁻¹(x) domain: [−1, 1], range: [−π/2, π/2]',
      'cos⁻¹(x) domain: [−1, 1], range: [0, π]',
      'tan⁻¹(x) domain: ℝ, range: (−π/2, π/2)',
      'sin⁻¹(x) + cos⁻¹(x) = π/2',
      'tan⁻¹(x) + cot⁻¹(x) = π/2',
      'tan⁻¹(x) + tan⁻¹(y) = tan⁻¹((x + y) / (1 − xy))  [if xy < 1]'
    ]
  },
  // 6. Parabola
  {
    catId: 'coord', title: 'Parabola', tag: 'Coord', formulas: [
      'Standard: y² = 4ax (opens right)',
      'Standard: x² = 4ay (opens up)',
      'For y² = 4ax:',
      'Focus = (a, 0), Directrix: x = −a',
      'Axis: y = 0, Latus Rectum = 4a',
      'Focal distance of point P(x, y) = x + a'
    ]
  },
  // 7. Ellipse
  {
    catId: 'coord', title: 'Ellipse', tag: 'Coord', formulas: [
      'Standard: x²/a² + y²/b² = 1  (a > b)',
      'Eccentricity: e = √(1 − b²/a²)',
      'Foci: (±ae, 0), Directrices: x = ±a/e',
      'Vertices: (±a, 0), Co-vertices: (0, ±b)',
      'Major Axis = 2a, Minor Axis = 2b',
      'Latus Rectum = 2b²/a'
    ]
  },
  // 8. Hyperbola
  {
    catId: 'coord', title: 'Hyperbola', tag: 'Coord', formulas: [
      'Standard: x²/a² − y²/b² = 1',
      'Eccentricity: e = √(1 + b²/a²)',
      'Foci: (±ae, 0), Directrices: x = ±a/e',
      'Vertices: (±a, 0), Transverse Axis = 2a',
      'Asymptotes: y = ±(b/a)x',
      'Latus Rectum = 2b²/a'
    ]
  },
  // 9. Sets
  {
    catId: 'discrete', title: 'Sets & Operations', tag: 'Discrete', formulas: [
      'Union: A ∪ B = {x : x ∈ A or x ∈ B}',
      'Intersection: A ∩ B = {x : x ∈ A and x ∈ B}',
      'Difference: A − B = {x : x ∈ A and x ∉ B}',
      'Complement: A′ = {x ∈ U : x ∉ A}',
      'De Morgan: (A ∪ B)′ = A′ ∩ B′',
      'De Morgan: (A ∩ B)′ = A′ ∪ B′',
      'n(A ∪ B) = n(A) + n(B) − n(A ∩ B)',
      'n(A ∪ B ∪ C) = n(A)+n(B)+n(C) − n(A∩B)−n(B∩C)−n(C∩A) + n(A∩B∩C)',
      'Subsets count: 2ⁿ for set of size n'
    ]
  },
  // 10. Relations and Functions
  {
    catId: 'discrete', title: 'Relations & Functions', tag: 'Discrete', formulas: [
      'Cartesian Product: A × B = {(a, b) : a ∈ A, b ∈ B}',
      'Reflexive Relation: aRa for all a ∈ A',
      'Symmetric Relation: aRb ⟹ bRa',
      'Transitive Relation: aRb and bRc ⟹ aRc',
      'Equivalence: Reflexive + Symmetric + Transitive',
      'Injective (1-1): f(x) = f(y) ⟹ x = y',
      'Surjective (Onto): Range of f = Codomain of f',
      'Bijective: Both Injective and Surjective',
      'Composition: (f ∘ g)(x) = f(g(x))'
    ]
  },
  // 11. Applications of Derivatives
  {
    catId: 'calc', title: 'Applications of Derivatives', tag: 'Calc', formulas: [
      'Tangent Slope at P(x₁, y₁): m = f′(x₁)',
      'Tangent Line: y − y₁ = f′(x₁)(x − x₁)',
      'Normal Line: y − y₁ = −(1 / f′(x₁))(x − x₁)',
      'Increasing: f′(x) ≥ 0',
      'Decreasing: f′(x) ≤ 0',
      'Local Maxima: f′(c) = 0 and f″(c) < 0',
      'Local Minima: f′(c) = 0 and f″(c) > 0'
    ]
  },
  // 12. Applications of Integrals
  {
    catId: 'calc', title: 'Applications of Integrals', tag: 'Calc', formulas: [
      'Area under y = f(x) from a to b: A = ∫[a,b] f(x) dx',
      'Area between f(x) and g(x): A = ∫[a,b] (f(x) − g(x)) dx  [f(x) ≥ g(x)]',
      'Volume of Revolution (x-axis): V = π ∫[a,b] [f(x)]² dx',
      'Volume of Revolution (y-axis): V = 2π ∫[a,b] x·f(x) dx'
    ]
  },
  // 13. Differential Equations
  {
    catId: 'calc', title: 'Differential Equations', tag: 'Calc', formulas: [
      'Variable Separable: dy/dx = g(x)h(y) ⟹ ∫(1/h(y)) dy = ∫g(x) dx',
      'Homogeneous: dy/dx = f(y/x) ⟹ substitute y = vx',
      'Linear 1st Order: dy/dx + P(x)y = Q(x)',
      'Integrating Factor: I.F. = e^(∫P(x) dx)',
      'General Solution: y · I.F. = ∫(Q(x) · I.F.) dx + C'
    ]
  },
  // 14. Three Dimensional Geometry
  {
    catId: 'coord', title: '3D Coordinate Geometry', tag: 'Coord', formulas: [
      'Direction Cosines: l = cos α, m = cos β, n = cos γ',
      'DC Identity: l² + m² + n² = 1',
      'Distance: d = √((x₂ − x₁)² + (y₂ − y₁)² + (z₂ − z₁)²)',
      'Line Vector eq: r = a + λb',
      'Line Cartesian eq: (x − x₁)/a = (y − y₁)/b = (z − z₁)/c',
      'Plane Vector eq: r · n = d',
      'Plane Cartesian eq: ax + by + cz = d',
      'Plane Point-Normal: a(x − x₁) + b(y − y₁) + c(z − z₁) = 0'
    ]
  },
  // 15. Linear Programming
  {
    catId: 'alg', title: 'Linear Programming', tag: 'Algebra', formulas: [
      'Objective Function: Z = ax + by (maximize/minimize)',
      'Decision Variables: x ≥ 0, y ≥ 0',
      'Linear Constraints: aᵢx + bᵢy ≤ cᵢ (or ≥, =)',
      'Corner Point Theorem: Optimal values always occur at the vertices (corner points) of the feasible region.'
    ]
  },
  // 16. Laplace Transforms
  {
    catId: 'engg', title: 'Laplace Transforms', tag: 'Engg', formulas: [
      'L{1} = 1/s',
      'L{e^(at)} = 1 / (s − a)',
      'L{tⁿ} = n! / sⁿ⁺¹',
      'L{sin wt} = w / (s² + w²)',
      'L{cos wt} = s / (s² + w²)',
      'L{e^(at)·f(t)} = F(s − a)  [First Shifting]',
      'L{f′(t)} = s·F(s) − f(0)'
    ]
  },
  // 17. Fourier Series
  {
    catId: 'engg', title: 'Fourier Series', tag: 'Engg', formulas: [
      'Expansion: f(x) = a₀/2 + Σ [aₙ cos(nx) + bₙ sin(nx)]',
      'a₀ = (1/π) ∫[−π,π] f(x) dx',
      'aₙ = (1/π) ∫[−π,π] f(x) cos(nx) dx',
      'bₙ = (1/π) ∫[−π,π] f(x) sin(nx) dx'
    ]
  },
  // 18. Z-Transform
  {
    catId: 'engg', title: 'Z-Transform', tag: 'Engg', formulas: [
      'Definition: X(z) = Σ x[n] z⁻ⁿ  (n from −∞ to ∞)',
      'Z{δ[n]} = 1  (unit impulse)',
      'Z{u[n]} = z / (z − 1)  [ROC: |z| > 1] (unit step)',
      'Z{aⁿ u[n]} = z / (z − a)  [ROC: |z| > |a|]',
      'Z{n u[n]} = z / (z − 1)²'
    ]
  },
  // 19. Factorial & Stirling's
  {
    catId: 'seq', title: 'Factorials', tag: 'Seq', formulas: [
      'Definition: n! = n × (n − 1) × … × 1',
      'Recurrence: n! = n × (n − 1)!',
      'Zero Factorial: 0! = 1',
      'Stirling\'s: n! ≈ √(2πn) · (n/e)ⁿ'
    ], code: `function factorial(n) {\n  if (n < 0) return undefined;\n  return n <= 1 ? 1 : n * factorial(n - 1);\n}`
  },
  // 20. Exponential Growth & Decay
  {
    catId: 'alg', title: 'Exponential Growth', tag: 'Algebra', formulas: [
      'Discrete Growth: N(t) = N₀(1 + r)ᵗ',
      'Continuous Growth: N(t) = N₀ e^(kt)',
      'Decay Model: N(t) = N₀ e^(−kt)',
      'Half-Life: T_half = ln(2) / k ≈ 0.693 / k',
      'Doubling Time: T_double = ln(2) / k'
    ]
  },
  // 21. Recurrence Relations
  {
    catId: 'cplx', title: 'Recurrence Relations', tag: 'Complexity', formulas: [
      'Linear Homogeneous: aₙ = c₁aₙ₋₁ + c₂aₙ₋₂',
      'Characteristic Equation: r² − c₁r − c₂ = 0',
      'Distinct Roots r₁, r₂: aₙ = A(r₁)ⁿ + B(r₂)ⁿ',
      'Repeated Root r: aₙ = (A + Bn)(r)ⁿ',
      'Fibonacci: Fₙ = Fₙ₋₁ + Fₙ₋₂ ⟹ r² − r − 1 = 0'
    ]
  },
  // 22. Graph Theory Basics
  {
    catId: 'discrete', title: 'Graph Theory Basics', tag: 'Discrete', formulas: [
      'Handshaking Lemma: Σ deg(v) = 2|E|',
      'Euler\'s Formula (Planar): V − E + F = 2',
      'Trees Property: |E| = |V| − 1 (connected, acyclic)',
      'Sum of interior angles of region: Σ deg(f) = 2|E|',
      'Complete Graph Kₙ Edges: n(n − 1) / 2',
      'Bipartite max edges: V² / 4'
    ]
  },
  // 23. Boolean Algebra
  {
    catId: 'discrete', title: 'Boolean Algebra', tag: 'Discrete', formulas: [
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
    ]
  },
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
  const clearBtn = document.getElementById('search-clear-btn');
  if (clearBtn) {
    clearBtn.style.display = query.length > 0 ? 'block' : 'none';
  }
  if (!q) {
    if (VIEW === 'section' && ACTIVE_CAT && ACTIVE_SECTION_TITLE) renderSectionView(ACTIVE_CAT, ACTIVE_SECTION_TITLE);
    else if (ACTIVE_CAT && VIEW !== 'dashboard') renderTopicView(ACTIVE_CAT);
    else renderDashboard();
    return;
  }
  VIEW = 'search'; buildSidebar(); renderSearch(q);
}

function openMobileSearch() {
  const topbar = document.getElementById('topbar');
  if (topbar) topbar.classList.add('search-mode');
  const searchInput = document.getElementById('search');
  if (searchInput) {
    searchInput.focus();
  }
}

function closeMobileSearch() {
  const topbar = document.getElementById('topbar');
  if (topbar) topbar.classList.remove('search-mode');
  const searchInput = document.getElementById('search');
  if (searchInput) {
    searchInput.value = '';
    handleSearch('');
  }
}

function clearSearchInput(event) {
  if (event) event.stopPropagation();
  const searchInput = document.getElementById('search');
  if (searchInput) {
    searchInput.value = '';
    searchInput.focus();
  }
  handleSearch('');
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

function createAppIcon(size, imgEl) {
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

    if (imgEl && imgEl.complete && imgEl.naturalWidth !== 0) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size * 0.38, 0, Math.PI * 2);
      ctx.clip();
      ctx.drawImage(imgEl, size * 0.12, size * 0.12, size * 0.76, size * 0.76);
      ctx.restore();
      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = Math.max(1.5, size * 0.02);
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size * 0.38, 0, Math.PI * 2);
      ctx.stroke();
    } else {
      ctx.fillStyle = '#3b82f6';
      ctx.font = `bold ${size * 0.38}px Georgia,serif`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText('◉', size / 2, size / 2 + size * 0.04);
      ctx.fillStyle = 'rgba(59,130,246,0.25)';
      ctx.font = `bold ${size * 0.18}px Space Grotesk,sans-serif`;
      ctx.fillText('∑', size * 0.66, size * 0.7);
    }
    return cv.toDataURL('image/png');
  } catch (e) { return ''; }
}

function setupPWA() {
  try {
    const link = document.createElement('link');
    link.rel = 'manifest';
    document.head.appendChild(link);

    const logoImg = new Image();
    logoImg.src = 'logo.jpg';
    logoImg.onload = function() {
      try {
        const icon192 = createAppIcon(192, logoImg);
        const icon512 = createAppIcon(512, logoImg);
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
        link.href = URL.createObjectURL(blob);
      } catch (e) {}

      // Update apple touch icon if it exists
      try {
        const appleLink = document.querySelector('link[rel="apple-touch-icon"]');
        if (appleLink) {
          appleLink.href = createAppIcon(180, logoImg);
        }
      } catch (e) {}
    };

    if (logoImg.complete) {
      logoImg.onload();
    }
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
    closeInstallModal();
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


function handleInstallClick() {
  const modal = document.getElementById('install-modal');
  const bd = document.getElementById('install-modal-backdrop');
  if (modal) { modal.style.display = 'flex'; modal.offsetHeight; modal.classList.add('open'); }
  if (bd) { bd.style.display = 'block'; bd.offsetHeight; bd.classList.add('open'); }
}

function closeInstallModal() {
  const modal = document.getElementById('install-modal');
  const bd = document.getElementById('install-modal-backdrop');
  if (modal) { modal.classList.remove('open'); setTimeout(() => { modal.style.display = 'none'; }, 250); }
  if (bd) { bd.classList.remove('open'); setTimeout(() => { bd.style.display = 'none'; }, 250); }
}

/* ── INIT ── */
document.getElementById('total-count').textContent =
  SECTIONS.reduce((a, s) => a + (s.formulas ? s.formulas.length : 0) + (s.rows ? s.rows.length : 0), 0);
setupPWA();
buildSidebar();
renderDashboard();
