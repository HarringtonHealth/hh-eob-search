import angular from 'angular';
import { EobSearchComponent } from './eob-search.component';
import { EobSearchService } from './eob-search.service';
import EobDateFilter from '../../filters/eob-date.filter';
import EobMemberFilter from '../../filters/eob-member.filter';

export const EobSearchModule = angular
	.module('EobSearchModule', [])
	.component('eobSearch', EobSearchComponent)
	.service('EobSearchService', EobSearchService)
	.filter('eobDateFilter', () => EobDateFilter)
	.filter('eobMemberFilter', () => EobMemberFilter)
	.name;