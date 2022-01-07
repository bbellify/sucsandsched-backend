
exports.seed = async function(knex) {
    await knex('races').insert(
        { 
            race_name: 'Silver Falls Trail Challenge',
            race_date: 'March 6, 2022',
            race_distance: 'half marathon',
            race_website: 'https://www.bivouacracing.com/silverfalls',
            race_location: 'Silver Falls State Park, OR'
        }
    )
};