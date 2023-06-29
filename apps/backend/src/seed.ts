import { PrismaClient } from "@prisma/client";

export default async function seed () {
  const prisma = new PrismaClient()

  const user1 = await prisma.user.create({
    data: {
      name: 'User 1',
      email: 'user1@mail.com'
    }
  });

  const user2 = await prisma.user.create({
    data: {
      name: 'User 2',
      email: 'user2@mail.com'
    }
  });

  const user3 = await prisma.user.create({
    data: {
      name: 'User 3',
      email: 'user3@mail.com'
    }
  });

  const form1 = await prisma.form.create({
    data: {
      name: 'Form 1',
      owner: {
        connect: {
          id: user1.id
        },
      },
      questions: {
        create: [{
          text: 'Question 1',
          required: true,
          type: {
            create: {
              kind: "Boolean",
              name: 'Boolean question',
              boolean: {
                create: {
                  trueLabel: 'Yes',
                  falseLabel: 'No',
                }
              }
            }
          }
        }, {
          text: 'Question 2',
          required: true,
          type: {
            create: {
              kind: "Number",
              name: 'Number question',
              number: {
                create: {
                  min: 0,
                  max: 10,
                  step: 1,
                }
              }
            }
          }
        }, {
          text: 'Question 3',
          required: true,
          type: {
            create: {
              kind: 'String',
              name: 'String question',
              string: {
                create: {
                  minLength: 0,
                  maxLength: 100,
                }
              }
            }
          }
        }, {
          text: 'Question 4',
          required: true,
          type: {
            create: {
              kind: 'Options',
              name: 'Options question',
              options: {
                create: {
                  minOptions: 1,
                  maxOptions: 1,
                  options: {
                    create: [{
                      label: 'Option 1',
                      value: '1'
                    }, {
                      label: 'Option 2',
                      value: '2'
                    }, {
                      label: 'Option 3',
                      value: '3'
                    }]
                  }
                }
              }
            }
          }
        }, {
          text: 'Question 4',
          required: true,
          type: {
            create: {
              kind: 'Options',
              name: 'Options question',
              options: {
                create: {
                  minOptions: 1,
                  maxOptions: 2,
                  options: {
                    create: [{
                      label: 'Option 1',
                      value: '1'
                    }, {
                      label: 'Option 2',
                      value: '2'
                    }, {
                      label: 'Option 3',
                      value: '3'
                    }]
                  }
                }
              }
            }
          }
        }]
      }
    }
  })

}