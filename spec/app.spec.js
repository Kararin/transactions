let findDuplicates = require('../duplicates.js').findDuplicates;


describe("Duplicates", () => {
  it("values should be equal", () => {
    let data = [
      {
        id: 5,
        sourceAccount: 'A',
        targetAccount: 'C',
        amount: 250,
        category: 'other',
        time: '2018-03-02T10:33:00.000Z'
      },
      {
        id: 7,
        sourceAccount: 'A',
        targetAccount: 'G',
        amount: 250,
        category: 'other',
        time: '2018-03-03T10:33:00.000Z'
      },
      {
        id: 1,
        sourceAccount: 'A',
        targetAccount: 'B',
        amount: 100,
        category: 'eating_out',
        time: '2018-03-02T10:33:00.000Z'
      },
      {
        id: 6,
        sourceAccount: 'A',
        targetAccount: 'C',
        amount: 250,
        category: 'other',
        time: '2018-03-02T10:33:05.000Z'
      },
      {
        id: 2,
        sourceAccount: 'A',
        targetAccount: 'B',
        amount: 100,
        category: 'eating_out',
        time: '2018-03-02T10:33:50.000Z'
      },
      {
        id: 3,
        sourceAccount: 'A',
        targetAccount: 'B',
        amount: 100,
        category: 'eating_out',
        time: '2018-03-02T10:34:30.000Z'
      }
    ];
    let expected = [
      [
        {
          id: 1,
          sourceAccount: 'A',
          targetAccount: 'B',
          amount: 100,
          category: 'eating_out',
          time: '2018-03-02T10:33:00.000Z'
        },
        {
          id: 2,
          sourceAccount: 'A',
          targetAccount: 'B',
          amount: 100,
          category: 'eating_out',
          time: '2018-03-02T10:33:50.000Z'
        },
        {
          id: 3,
          sourceAccount: 'A',
          targetAccount: 'B',
          amount: 100,
          category: 'eating_out',
          time: '2018-03-02T10:34:30.000Z'
        },
      ],
      [
        {
          id: 5,
          sourceAccount: 'A',
          targetAccount: 'C',
          amount: 250,
          category: 'other',
          time: '2018-03-02T10:33:00.000Z'
        },
        {
          id: 6,
          sourceAccount: 'A',
          targetAccount: 'C',
          amount: 250,
          category: 'other',
          time: '2018-03-02T10:33:05.000Z'
        }
      ]
    ];

    expect(findDuplicates(data)).toEqual(expected);
  });
});