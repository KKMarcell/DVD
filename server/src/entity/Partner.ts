import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { PartnerDTO } from '../../../models';

@Entity()
export class Partner implements PartnerDTO {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @Column()
    phone: string;

    @Column()
    IDcard: string;

    @Column()
    address: string;

    @Column()
    status: string;
}