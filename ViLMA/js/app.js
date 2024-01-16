var leaderboardData = [
    {
        'rank': null,
        'method':   'Random',
        'category': 'random',
        'reference': null,
        'url': null,
        'counting': 25.0,
        'situated-awareness': 18.9,
        'change-state': 25.0,
        'rare-actions': 25.0,
        'relations': 25.0,
        'average': 23.8
    },
    {
        'rank': null,
        'method':   'GPT',
        'category': 'text',
        'reference': 'Radford et al., 2019',
        'url': 'https://d4mucfpksywv.cloudfront.net/better-language-models/language_models_are_unsupervised_multitask_learners.pdf',
        'counting': 27.6,
        'situated-awareness': 31.7,
        'change-state': 10.8,
        'rare-actions': 17.7,
        'relations': 43.0,
        'average': 26.2
    },
    {
        'rank': null,
        'method': 'OPT',
        'category': 'text',
        'reference': 'Zhang et al., 2022',
        'url': 'https://arxiv.org/abs/2205.01068',
        'counting': 31.0,
        'situated-awareness': 38.7,
        'change-state': 12.9,
        'rare-actions': 14.9,
        'relations': 55.7,
        'average': 30.6,
    },
    {
        'rank': null,
        'method': 'CLIP',
        'category': 'image',
        'reference': 'Radford et al., 2021',
        'url': 'http://proceedings.mlr.press/v139/radford21a/radford21a.pdf',
        'counting': 46.2,
        'situated-awareness': 33.6,
        'change-state': 52.2,
        'rare-actions': 87.8,
        'relations': 44.8,
        'average': 52.9,
    },
    {
        'rank': null,
        'method': 'BLIP2',
        'category': 'image',
        'reference': 'Li et al., 2023',
        'url': 'https://arxiv.org/abs/2301.12597',
        'counting': 43.7,
        'situated-awareness': 55.7,
        'change-state': 38.1,
        'rare-actions': 70.5,
        'relations': 79.4,
        'average': 57.5,
    },
    {
        'rank': null,
        'method': 'ClipBERT',
        'category': 'video',
        'reference': 'Lei et al., 2021',
        'url': 'https://arxiv.org/abs/2102.06183',
        'counting': 28.0,
        'situated-awareness': 31.9,
        'change-state': 33.5,
        'rare-actions': 17.7,
        'relations': 14.1,
        'average': 25.0,
    },
    {
        'rank': null,
        'method': 'UniVL',
        'category': 'video',
        'reference': 'Luo et al., 2020',
        'url': 'https://arxiv.org/abs/2002.06353',
        'counting': 32.2,
        'situated-awareness': 24.1,
        'change-state': 43.0,
        'rare-actions': 59.9,
        'relations': 33.2,
        'average': 38.5,
    },
    {
        'rank': null,
        'method': 'VideoCLIP',
        'category': 'video',
        'reference': 'Xu et al., 2021',
        'url': 'https://arxiv.org/abs/2109.14084',
        'counting': 36.5,
        'situated-awareness': 24.9,
        'change-state': 25.9,
        'rare-actions': 67.5,
        'relations': 39.7,
        'average': 38.9,
    },
    {
        'rank': null,
        'method': 'FiT',
        'category': 'video',
        'reference': 'Bain et al., 2021',
        'url': 'https://arxiv.org/abs/2104.00650',
        'counting': 44.6,
        'situated-awareness': 29.1,
        'change-state': 47.8,
        'rare-actions': 80.7,
        'relations': 38.7,
        'average': 48.2,
    },
    {
        'rank': null,
        'method': 'CLIP4Clip',
        'category': 'video',
        'reference': 'Luo et al., 2021',
        'url': 'https://arxiv.org/abs/2104.08860',
        'counting': 48.0,
        'situated-awareness': 37.6,
        'change-state': 52.1,
        'rare-actions': 78.7,
        'relations': 44.2,
        'average': 52.1,
    },
    {
        'rank': null,
        'method': 'VIOLET',
        'category': 'video',
        'reference': 'Fu et al., 2021',
        'url': 'https://arxiv.org/abs/2111.12681',
        'counting': 36.5,
        'situated-awareness': 32.4,
        'change-state': 49.1,
        'rare-actions': 74.6,
        'relations': 38.7,
        'average': 46.3,
    },
    {
        'rank': null,
        'method': 'X-CLIP',
        'category': 'video',
        'reference': 'Ni et al., 2022',
        'url': 'https://arxiv.org/abs/2208.02816',
        'counting': 46.4,
        'situated-awareness': 31.0,
        'change-state': 46.0,
        'rare-actions': 72.3,
        'relations': 43.5,
        'average': 47.8,
    },
    {
        'rank': null,
        'method': 'MCQ',
        'category': 'video',
        'reference': 'Ge et al., 2022',
        'url': 'https://arxiv.org/abs/2208.02816',
        'counting': 41.5,
        'situated-awareness': 26.3,
        'change-state': 45.3,
        'rare-actions': 82.3,
        'relations': 39.4,
        'average': 47.0,
    },
    {
        'rank': null,
        'method': 'Singularity',
        'category': 'video',
        'reference': 'Lei et al., 2023',
        'url': 'https://aclanthology.org/2023.acl-long.29/',
        'counting': 41.5,
        'situated-awareness': 30.1,
        'change-state': 50.3,
        'rare-actions': 83.1,
        'relations': 38.9,
        'average': 48.8,
    },
    {
        'rank': null,
        'method': 'UniPerceiver',
        'category': 'video',
        'reference': 'Zhu et al., 2021',
        'url': 'https://arxiv.org/abs/2112.01522',
        'counting': 23.0,
        'situated-awareness': 21.1,
        'change-state': 29.1,
        'rare-actions': 34.7,
        'relations': 20.1,
        'average': 25.6,
    },
    {
        'rank': null,
        'method': 'MReserve',
        'category': 'video',
        'reference': 'Zellers et al., 2022',
        'url': 'https://arxiv.org/abs/2201.02639',
        'counting': 46.9,
        'situated-awareness': 25.3,
        'change-state': 50.4,
        'rare-actions': 77.6,
        'relations': 29.2,
        'average': 45.9,
    },
    {
        'rank': null,
        'method': 'VindLU',
        'category': 'video',
        'reference': 'Cheng et al., 2023',
        'url': 'https://arxiv.org/abs/2212.05051',
        'counting': 43.5,
        'situated-awareness': 31.2,
        'change-state': 45.6,
        'rare-actions': 88.0,
        'relations': 39.4,
        'average': 49.5,
    },
];


var renderScore = function(data, type, row) {
    return data.toFixed(1) + '%';
};


var renderMethod = function(data, type, row) {
    var icon = '';
    if (row.category === 'text') 
        icon = '<i class="bi bi-file-text" title="Text-only Model"></i> ';
    else if (row.category === 'image')
        icon = '<i class="bi bi-file-image" title="Image-Language Model"></i> ';
    else if (row.category === 'video')
        icon = '<i class="bi bi-camera-reels" title="Video-Language Model"></i> ';
    else if (row.category === 'random')
        icon = '<i class="bi bi-shuffle"></i> ';

    var url = '';
    if (row.reference) {
        url = ` <a style="font-size: 12px; text-decoration: none;" href="${row.url}">(${row.reference})</a>`
    }

    return icon + data + url;
};

  

$(document).ready(function(){
    const leaderboardTable = new DataTable('#example', {
        data: leaderboardData,
        searching: false,
        paging: false,
        info: false,
        scrollCollapse: true,
        scrollX: true,
        scrollY: 425,
        columns: [
            { title: '#', data: 'rank', searchable: false, orderable: false, width: '1%', className: 'dt-body-right'}, 
            { title: 'Method', data: 'method', render: renderMethod },
            // { title: 'Type', data: 'category', width: '1%', render: renderMethodType },
            { title: 'Action Counting', data: 'counting', width: '10%', render: renderScore, className: 'dt-body-right' },
            { title: 'Situated Awareness', data: 'situated-awareness', width: '10%', render: renderScore, className: 'dt-body-right' },
            { title: 'Change State', data: 'change-state', width: '10%', render: renderScore, className: 'dt-body-right' },
            { title: 'Rare Actions', data: 'rare-actions', width: '10%', render: renderScore, className: 'dt-body-right'},
            { title: 'Spatial Relations', data: 'relations' , width: '10%', render: renderScore, className: 'dt-body-right'},
            { title: 'Average', data: 'average', width: '10%', render: renderScore, className: 'dt-body-right'}
        ]
    } );

    leaderboardTable.on('order.dt', function () {
        let i = 1;
 
        leaderboardTable
            .cells(null, 0, { order: 'applied' })
            .every(function (cell) {
                this.data(i++);
            });
    }).draw();
});