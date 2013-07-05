App = Ember.Application.create();

App.Router.map(function() {
    this.resource('races', { path: '/' });
});

App.RacesRoute = Ember.Route.extend({
    model: function() {
        return App.Race.find();
    }
});

App.Race = DS.Model.extend({
    name: DS.attr('string'),
    avatar: DS.attr('string'),
    description: DS.attr('string')
});

App.Store = DS.Store.extend({
    revision: 13,
    adapter: 'DS.FixtureAdapter'
});

App.Race.FIXTURES = [
    {id: 1, name: 'Amazon', description: "Long ago, driven by a desire for adventure, the Valkyries of the Norse settlement in Lustria sailed away from their menfolk and founded a colony deep within the estuary of the river Amaxon. Now these ferocious warriors have taken to the Blood Bowl pitch – and Nuffle save those who dare to challenge them!"},
    {id: 2, name: 'Ogre', description: 'Ogre teams have existed since the forming of the NAF and have even won the XV Blood Bowl. However, as any right-minded person will tell you, having more than one Ogre in the same place at the same time is a disaster waiting to happen!'},
    {id: 3, name: 'Elves', description: 'When the NAF collapsed, many Elven teams were left penniless. Those that survived the financial fallout are not as rich as their High Elf cousins nor as well equipped, but they still sure know how to play!'},
    {id: 4, name: 'Human', description: "Although Human teams do not have the individual strength or outstanding abilities available to other races, they do not suffer from any outstanding weaknesses either. This makes Human teams extremely flexible, equally at home running the ball, passing it, or ignoring it and pounding the opposition into the turf instead."}
]
