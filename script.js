document.addEventListener('DOMContentLoaded', () => {
    const races = [
        { round: 1, country: 'Australia', date: '14-16 Mar', flag: 'https://flagcdn.com/w320/au.png' },
        { round: 2, country: 'China', date: '21-23 Mar', flag: 'https://flagcdn.com/w320/cn.png' },
        { round: 3, country: 'Japan', date: '04-06 Apr', flag: 'https://flagcdn.com/w320/jp.png' },
        { round: 4, country: 'Bahrain', date: '11-13 Apr', flag: 'https://flagcdn.com/w320/bh.png' },
        { round: 5, country: 'Saudi Arabia', date: '18-20 Apr', flag: 'https://flagcdn.com/w320/sa.png' },
        { round: 6, country: 'Miami', date: '02-04 May', flag: 'https://flagcdn.com/w320/us.png' },
        { round: 7, country: 'Emilia-Romagna', date: '16-18 May', flag: 'https://flagcdn.com/w320/it.png' },
        { round: 8, country: 'Monaco', date: '23-25 May', flag: 'https://flagcdn.com/w320/mc.png' },
        { round: 9, country: 'Spain', date: '30 May-01 Jun', flag: 'https://flagcdn.com/w320/es.png' },
        { round: 10, country: 'Canada', date: '13-15 Jun', flag: 'https://flagcdn.com/w320/ca.png' },
        { round: 11, country: 'Austria', date: '27-29 Jun', flag: 'https://flagcdn.com/w320/at.png' },
        { round: 12, country: 'Great Britain', date: '04-06 Jul', flag: 'https://flagcdn.com/w320/gb.png' },
        { round: 13, country: 'Belgium', date: '25-27 Jul', flag: 'https://flagcdn.com/w320/be.png' },
        { round: 14, country: 'Hungary', date: '01-03 Aug', flag: 'https://flagcdn.com/w320/hu.png' },
        { round: 15, country: 'Netherlands', date: '29-31 Aug', flag: 'https://flagcdn.com/w320/nl.png' },
        { round: 16, country: 'Italy', date: '05-07 Sep', flag: 'https://flagcdn.com/w320/it.png' },
        { round: 17, country: 'Azerbaijan', date: '19-21 Sep', flag: 'https://flagcdn.com/w320/az.png' },
        { round: 18, country: 'Singapore', date: '03-05 Oct', flag: 'https://flagcdn.com/w320/sg.png' },
        { round: 19, country: 'United States', date: '17-19 Oct', flag: 'https://flagcdn.com/w320/us.png' },
        { round: 20, country: 'Mexico', date: '24-26 Oct', flag: 'https://flagcdn.com/w320/mx.png' },
        { round: 21, country: 'Brazil', date: '07-09 Nov', flag: 'https://flagcdn.com/w320/br.png' },
        { round: 22, country: 'Las Vegas', date: '20-22 Nov', flag: 'https://flagcdn.com/w320/us.png' },
        { round: 23, country: 'Qatar', date: '28-30 Nov', flag: 'https://flagcdn.com/w320/qa.png' },
        { round: 24, country: 'Abu Dhabi', date: '05-07 Dec', flag: 'https://flagcdn.com/w320/ae.png' }
    ];

    const calendarBody = document.getElementById('calendar-body');

    races.forEach(race => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${race.round}</td>
            <td>${race.country}</td>
            <td>${race.date}</td>
            <td><img src="${race.flag}" alt="${race.country} flag"></td>
        `;
        calendarBody.appendChild(row);
    });
});