import random

# Generate 100 random test cases
test_cases = []

for _ in range(40):
    # Random float between -1000 and 1000
    a = round(random.uniform(-1000, 1000), 4)
    # Random float between -1000 and 1000
    b = round(random.uniform(-1000, 1000), 3)
    expected_result = round(a) + round(b)

    test_cases.append({
        "a": a,
        "b": b,
        "expected_result": expected_result
    })

# Print the generated test cases
for i, test_case in enumerate(test_cases, start=1):
    print(
        f"it('should return {test_case['expected_result']} when adding {test_case['a']} and {test_case['b']}', () => {{")
    print(
        f"  assert.strictEqual(calculateNumber({test_case['a']}, {test_case['b']}), {test_case['expected_result']});")
    print(f"}});")
