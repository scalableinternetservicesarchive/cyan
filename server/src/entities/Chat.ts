import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Chat extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    length: 100,
    nullable: true,
  })
  name: string

  @Column({
    length: 100,
    nullable: true,
  })
  text: string
}
