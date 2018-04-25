import angular from 'angular';
import { EobSearchModule } from './eob-search/eob-search.module';

export const ComponentsModule = angular
	.module('HhEobSearch.components', [
		EobSearchModule
	])
	.name;