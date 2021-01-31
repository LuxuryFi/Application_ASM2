import {IsNotEmpty } from 'class-validator'


export class CreateTopicDto {

    @IsNotEmpty()
    topic_name: string
    
    topic_description: string

    topic_summary: string

    slot: number

    is_active: number
}
