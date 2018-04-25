import angular from 'angular';
import { ComponentsModule } from './components/components.module';
import run from './app.run';

export default angular
	.module('HhEobSearch', [
		ComponentsModule
	])
	.run(run)
	.name;