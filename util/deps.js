var Deps = {
	deps: {},
	ran: {},
	tasks: {},

	task: function(conf, deps, fun) {
		if (typeof conf === 'string') { 
			if (!fun) {
				fun = deps;
				deps = [];
			}
			conf = { 
				name: conf,
				deps: deps,
				fun: fun
			};
		}
		var name = conf.name;
		Deps.tasks[name] = conf;
		for (var i=0,dep; dep=conf.deps[i]; i++) {
			if (Deps.deps[dep])
				Deps.deps[dep].push(name);
			else
				Deps.deps[dep] = [name];
		}
		Deps._run(name);
	},
  
	complete: function(name) {
		console.log(name + ' completed');
		Deps.ran[name] = new Date();

		// try remaining dependents
		var deps = Deps.deps[name];
		delete Deps.deps[name];
		if (deps)
			for (var i=0,dep; dep=deps[i]; i++)
				Deps._run(dep);
			
		// clean up
		delete Deps.tasks[name];
	},
  
	_run: function(name) {
		var conf = Deps.tasks[name];

		// jump out if dependencies aren't met
		for (var i=0,dep; dep=conf.deps[i]; i++)
			if (!Deps.ran[dep])
				return;
				
		// execute task (return false to complete asynchronously)
		if (!conf.fun || conf.fun(name)!==false)
			Deps.complete(name);
	}
};

exports.Deps = Deps;