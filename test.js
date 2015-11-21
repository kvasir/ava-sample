import test from 'ava';

// Basic test
test('basic', t => {
	t.is('bar', 'bar');
	t.same(['a', 'b'], ['a', 'b']);
	t.end();
});

// Names are optional
test(t => {
	t.end();
});

// Use named function as name
test(function name(t) {
	t.end();
});

// Planned assertions
test('planned assert', t => {
	t.plan(1);

	setTimeout(() => {
		t.pass();
	}, 100);
});
