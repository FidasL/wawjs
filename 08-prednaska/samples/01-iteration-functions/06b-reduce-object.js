[
  ["a", 1],
  ["b", 2]
].reduce((r,[k, v]) => (r[k] = v, r),{})

x.reduce((r,s)=>{
	if (r[s.class]){
		r.[s.class].push(s);
	}
	else {
		r[s.class] = [];
		r[s.class].push(s);
	}
	return r;
}, {})


x.reduce((r,s)=>{
	if (r[s.class]){
		r.[s.class].push(s);
	}
	else {
		r[s.class] = [];
		r[s.class].push(s);
	}
	return r;
}, [[][]])